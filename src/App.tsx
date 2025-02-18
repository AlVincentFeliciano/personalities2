import { useState } from 'react';
import { cyclistList } from './data';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < cyclistList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(cyclistList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let cyclist = cyclistList[index];

  return (
    <Container maxWidth="sm">
      <Box component="section" sx={{ p: 2, border: '1px dashed grey', position: 'relative' }}>
        
        <Typography variant="h4" gutterBottom>
          Famous Cyclists
        </Typography>  
        <Typography variant="body1" color="textSecondary">
          Al Vincent Feliciano - C-PEITEL3
        </Typography>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 4, 
            marginTop: 2,    
          }}
        >
          <Button variant="contained" onClick={handleBackClick}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNextClick}>
            Next
          </Button>
        </Stack>

       <Box component="section" sx={{ p: 2, border: '1px dashed grey', position: 'relative' }}>
          <img
            src={cyclist.url}
            alt={cyclist.alt}
            style={{
              width: '90%',  
              maxWidth: '550px',  
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
              marginBottom: 16,  
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>

        <Typography variant="h5" component="h2" sx={{ fontStyle: 'italic', mb: 1, fontSize:'2rem' }}>
          {cyclist.name}
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          ({index + 1} of {cyclistList.length})
        </Typography>

        <IconButton 
          onClick={handleMoreClick} 
          sx={{
          marginLeft: 60,
          }}
        >
          {showMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>

        {showMore && (
          <Typography variant="body1" sx={{ mt: 1 }}>
            {cyclist.description}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
