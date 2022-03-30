import Link from 'next/link';

export default function Navbar() {
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
          <div className='' style={{ display: 'inline-block' }}>
            <section
              className='buttonM '
              style={{
                color: 'black',
              }}
            >
              {' '}
              <li
                className='button'
                style={{
                  color: 'black',
                }}
              >
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
            </section>{' '}
          </div>
          <div className='' style={{ display: 'inline-block' }}>
            <section
              className='buttonM dropdown'
              style={{ display: 'inline-block' }}
            >
              First section
              <div className='dropdown-content'>
                {' '}
                <li className='button'>
                  <Link href='/typography'>
                    <a>Link to typography</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/muibuttons'>
                    <a>Link to button</a>
                  </Link>
                </li>
              </div>
            </section>{' '}
          </div>
        </div>
      </nav>
    </div>
  );
}
