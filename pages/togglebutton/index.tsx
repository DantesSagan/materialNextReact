import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from '@mui/icons-material';
import {
  Stack,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function ToggleButtons() {
  // In this case when you toggle the button of BOLD || ITALIC || UNDERLINED
  // By specify useState formats will be pushed into array which will store data
  // What formats will be displayed and hold Formats for specify text in input or textarea

  const [formats, setFormats] = useState<string[]>([]);
  const [text, setText] = useState('');
  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  // And if we are assign it with null it will be displayed only one Format
  //   const [formats, setFormats] = useState<string | null>(null);
  // console.log(formats);

  // const handleFormatChange = (
  //   _event: React.MouseEvent<HTMLElement>,
  //   updatedFormats: string | null
  // ) => {
  //   setFormats(updatedFormats);
  // };

  const fontItalics =
    formats[0] === 'italic' ||
    formats[1] === 'italic' ||
    formats[2] === 'italic'
      ? 'italic'
      : null;

  const fontWeights =
    formats[0] === 'bold' || formats[1] === 'bold' || formats[2] === 'bold'
      ? 'bold'
      : null;

  const fontUnderline =
    formats[0] === 'underline' ||
    formats[1] === 'underline' ||
    formats[2] === 'underline'
      ? 'underline'
      : null;

  return (
    <Stack direction='row' display='inline-block'>
      {' '}
      <TextareaAutosize
        onChange={({ target }) => setText(target.value)}
        value={text}
        style={{
          fontStyle: fontItalics,
          textDecoration: fontUnderline,
          fontWeight: fontWeights,
        }}
      />{' '}
      <ToggleButtonGroup
        aria-label='text formatting'
        value={formats}
        onChange={handleFormatChange}
        size='small'
        color='success'
        // And if we assign exclusive parameter in this case to ToggleButtonGroup
        // Will be used and stored only one parameter
      >
        <ToggleButton value='bold' aria-label='bold'>
          <FormatBold />
        </ToggleButton>
        <ToggleButton value='italic' aria-label='italic'>
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value='underline' aria-label='underlined'>
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>{' '}
      <h1
        style={{
          fontStyle: fontItalics,
          textDecoration: fontUnderline,
          fontWeight: fontWeights,
        }}
      >
        {text}
      </h1>
      <Typography
        variant='h1'
        gutterBottom
        style={{
          fontStyle: fontItalics,
          textDecoration: fontUnderline,
          fontWeight: fontWeights,
        }}
      >
        h1
      </Typography>
    </Stack>
  );
}
