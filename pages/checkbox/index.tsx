import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import React, { useState } from 'react';

export default function IndexCheckBoxMUI() {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [error, setError] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log({ acceptTnC });
  console.log(skills);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);

    return index === -1
      ? // if value doesn't exist so added him
        setSkills([...skills, event.target.value])
      : // if value is presented so removed it
        setSkills(skills.filter((skill) => skill !== event.target.value));
  };

  return (
    <div>
      <input
        type='checkbox'
        id='check'
        name='check'
        onChange={handleChange}
        checked={acceptTnC}
      />
      <label htmlFor='check'>I accept terms and conditions</label>
      <Box>
        <Box>
          <FormControlLabel
            label='I accept terms and conditions'
            control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
          />
        </Box>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error={!error}>
          <FormLabel
            style={{ fontSize: '100px' }}
            color={!error ? 'error' : 'primary'}
          >
            Skills
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              label='HTML'
              value='HTML'
              control={
                <Checkbox
                  checked={skills.includes('HTML')}
                  onChange={handleSkillChange}
                  onClick={() => setError(true)}
                />
              }
            />
            <FormControlLabel
              label='CSS'
              value='CSS'
              control={
                <Checkbox
                  checked={skills.includes('CSS')}
                  onChange={handleSkillChange}
                  onClick={() => setError(true)}
                />
              }
            />
            <FormControlLabel
              label='JavaScript'
              value='JavaScript'
              control={
                <Checkbox
                  checked={skills.includes('JavaScript')}
                  onChange={handleSkillChange}
                  onClick={() => setError(true)}
                />
              }
            />
          </FormGroup>
          {!error ? <FormHelperText>Invalid selection</FormHelperText> : null}
        </FormControl>
      </Box>
    </div>
  );
}
