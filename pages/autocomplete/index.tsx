import { Autocomplete, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

type Skill = {
  id: number;
  label: string;
};

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export default function AutoCompleteIndex() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  // initially skill is set to null and if we are set from Autocomplete component a value
  // We will see setted data with id: '1', label:'HTML' for example
  console.log({ skill });
  console.log({ value });
  return (
    <Stack spacing={2} alignItems='center'>
      {/* Autocomplete - uses if you need list of suggestions of strings to complete input with some values you need */}
      <Typography variant='h4'>Standart value w/ freeSolo</Typography>
      <Autocomplete
        value={value}
        onChange={(_e: any, newValue: string | null) => setValue(newValue)}
        style={{ width: '150px' }}
        options={skills}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        // freeSolo - means if you type option that not have in an array, value will be displayed and added to log, this is autocomplete like google search
        freeSolo
      />
      <Typography variant='h4'>Type value w/ types</Typography>
      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(_e: any, newValue: Skill | null) => setSkill(newValue)}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        style={{ width: '150px' }}
      />
    </Stack>
  );
}
