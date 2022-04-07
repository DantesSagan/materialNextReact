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

  const fontItalic =
    formats[0] === 'italic' ||
    formats[1] === 'italic' ||
    formats[2] === 'italic'
      ? 'italic'
      : null;
  return (
    <Stack
      direction='row'
      display='inline-block'
      style={{ textAlign: 'center' }}
    >
      <ToggleButtonGroup
        aria-label='text formatting'
        value={formats}
        onChange={handleFormatChange}
        size='small'
        color='success'
        orientation='vertical'
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
      </ToggleButtonGroup>
      <TextareaAutosize
        onChange={({ target }) => setText(target.value)}
        value={text}
      />
      <div style={{ fontStyle: fontItalic }}>{text}</div>
      <Typography variant='h1' gutterBottom>
        h1
      </Typography>
    </Stack>
  );
}
