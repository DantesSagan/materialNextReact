/* eslint-disable react/display-name */
import { Alert, AlertProps, Button, Snackbar } from '@mui/material';
import { createRef, forwardRef, useImperativeHandle, useState } from 'react';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarLert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

export default function SnackBarsIndex() {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(!open);
  };

//   const Child = forwardRef((props, ref) => {
//     const [color, setColor] = useState('red');
//     // To customize the value that the parent will get in their ref.current:
//     // pass the ref object to useImperativeHandle as the first argument.
//     // Then, whatever will be returned from the callback in the second argument,
//     // will be the value of ref.current.
//     // Here I return an object with the toggleColor method on it, for the parent to use:
//     useImperativeHandle(ref, () => ({
//       toggleColor: () =>
//         setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red')),
//     }));
//     return <div style={{ backgroundColor: color }}>yo</div>;
//   });

//   const Parent = () => {
//     let childRef = createRef();
//     const handleButtonClicked = () => {
//       // Ref passed to a function component wrapped in forwardRef.
//       // Note that nothing has changed for this Parent component
//       // compared with the class component in example 2!
//       childRef.current.toggleColor();
//     };
//     return (
//       <div>
//         <button onClick={handleButtonClicked}>toggle color!</button>
//         <Child ref={childRef} />
//       </div>
//     );
//   };

  return (
    <>
      <Button variant='contained' color='info' onClick={() => setOpen(true)}>
        Submit
      </Button>
      {/* <Parent /> */}
      {/* <Snackbar
        message='Form submitted successfully!'
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      /> */}
      {/* Custom snackbar alert with forwardRef  */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
}
