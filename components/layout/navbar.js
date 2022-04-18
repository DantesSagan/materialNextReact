import { Stack, Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';

export default function Navbar({ color }) {
  // const seed = seedDatabse(firebaseLib);
  // console.log(seed);
  //   const router = useRouter();
  //   const { status, data: session } = useSession();

  //   const handleClick = () => {
  //     console.log('Placing you order');
  //     router.replace('/product');
  //   };

  // This component need for auth in this example by GitHub
  //   const AuthComponent = () => {
  //     const { data: session } = useSession();
  //     // If you current session is online you will see this signOut elements with button
  //     if (session) {
  //       return (
  //         <div
  //           className='dropdown-content'
  //           style={{
  //             background: 'black',
  //             color: 'white',
  //             textAlign: 'center',
  //             padding: '10px',
  //           }}
  //         >
  //           Signed in as {session.user.email}
  //           <br />
  //           <button
  //             className='button'
  //             style={{ background: 'black', color: 'white', textAlign: 'center' }}
  //             onClick={(e) => {
  //               e.preventDefault();
  //               signOut();
  //             }}
  //           >
  //             Sign Out
  //           </button>
  //         </div>
  //       );
  //     }
  //     // If you current session is offline you will see this signIn elements with button
  //     // to signIn with GitHub or whatever you want to currently authenticated
  //     return (
  //       <div
  //         className='dropdown-content'
  //         style={{
  //           background: 'black',
  //           color: 'white',
  //           textAlign: 'center',
  //           padding: '10px',
  //         }}
  //       >
  //         Not signted in <br />
  //         <button
  //           className='button'
  //           style={{ background: 'black', color: 'white' }}
  //           onClick={(e) => {
  //             e.preventDefault();
  //             signIn();
  //           }}
  //         >
  //           Sign In
  //         </button>
  //       </div>
  //     );
  //   };
  return (
    <div style={{ position: 'relative' }}>
      <nav
        style={{
          display: 'flex',
          top: 0,
          marginBottom: '200px',
        }}
      >
        <div id='navbar'>
          {' '}
          <div style={{ display: 'inline-block' }}>
            <Button className='buttonM' style={{ color: 'black' }}>
              {' '}
              <Link href='/'>Home</Link>
            </Button>{' '}
          </div>
          <div style={{ display: 'inline-block' }}>
            <section className='buttonM dropdown'>
              Interactive section
              <div className='dropdown-content'>
                {' '}
                <Stack direction='row' display='inline-block'>
                  {/* You can specify thig group on buttons with variant/orientation*/}
                  <ButtonGroup
                    variant='contained'
                    orientation='vertical'
                    size='small'
                    color='error'
                    aria-label='alignment button group'
                  >
                    <Button variant='contained'>
                      <Link href='/typography'>
                        <a>Link to typography</a>
                      </Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/muibuttons'>
                        <a>Link to button</a>
                      </Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/groupbuttons'>
                        <a>Link to Group buttons</a>
                      </Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/togglebutton'>
                        <a>Link to Toggle-button</a>
                      </Link>
                    </Button>
                  </ButtonGroup>
                </Stack>
              </div>
            </section>{' '}
          </div>
          <div style={{ display: 'inline-block' }}>
            <section className='buttonM dropdown'>
              Inputs section
              <div className='dropdown-content'>
                {' '}
                <Stack direction='row' display='inline-block'>
                  {/* You can specify thig group on buttons with variant/orientation*/}
                  <ButtonGroup
                    variant='contained'
                    orientation='vertical'
                    size='small'
                    color='error'
                    aria-label='alignment button group'
                  >
                    <Button variant='contained'>
                      {' '}
                      <Link href='/textfield'>
                        <a>Link to Text-field</a>
                      </Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/select'>
                        <a>Link to Select</a>
                      </Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/radiobutton'>
                        <a>Link to RadioButton</a>
                      </Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/checkbox'>
                        <a>Link to Checkbox</a>
                      </Link>
                    </Button>{' '}
                    <Button variant='contained'>
                      {' '}
                      <Link href='/switch'>Link to Swtich</Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/rating'>Link to Rating</Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/autocomplete'>Link to Autocomplete</Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/calculator'>Link to Calculator</Link>
                    </Button>
                  </ButtonGroup>
                </Stack>
              </div>
            </section>{' '}
          </div>
          <div style={{ display: 'inline-block' }}>
            <section className='buttonM dropdown'>
              Layout section
              <div className='dropdown-content'>
                {' '}
                <Stack direction='row' display='inline-block'>
                  {/* You can specify thig group on buttons with variant/orientation*/}
                  <ButtonGroup
                    variant='contained'
                    orientation='vertical'
                    size='small'
                    color='error'
                    aria-label='alignment button group'
                  >
                    {' '}
                    <Button variant='contained'>
                      {' '}
                      <Link href='/box'>Link to Box and Grid</Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/accordion'>Link to Accordion</Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/card'>Link to Card</Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/imagelist'>Link to ImageList</Link>
                    </Button>
                    <Button variant='contained'>
                      {' '}
                      <Link href='/navbar'>Link to Navbar</Link>
                    </Button>
                  </ButtonGroup>
                </Stack>
              </div>
            </section>{' '}
          </div>
        </div>
      </nav>
    </div>
  );
}
