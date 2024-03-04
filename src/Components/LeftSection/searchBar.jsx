import React from 'react';
import { InputBase, Stack, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UnreadChats } from '../../assets/icons';

function SearchBar() {
  return (
    <Stack
      padding="6px"
      width="100%"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0 0 0 6px"
      >
        <InputBase
          fullWidth
          placeholder="Search or start a new chat"
          id="search-bar"
          sx={{
            backgroundColor: '#F0F2F5',
            borderRadius: '10px',
            alignContent: 'center',
            alignItems: 'center',
            padding: "2px",
            '& .MuiInputBase-input': {
              fontSize: '14px',
            },
            '& .MuiSvgIcon-root': {
              fontSize: '20px',
            },
          }}
          startAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        <Stack margin="0 8px">
          <UnreadChats />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SearchBar;