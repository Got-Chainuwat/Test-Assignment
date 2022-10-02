import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Jsonfile from './../json/example_data.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


var days = [6, 0, 1, 2, 3, 4, 5];
var d = new Date();
var dayName = days[d.getDay()];
console.log(dayName)
function Item(props) {
  const { sx, ...other } = props;

  return (

    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function GridTemplateColumns() {
  return (
    <div style={{ width: '100%',marginLeft: '90px' , display:'flex', justifyContent:'center'}}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {
            Jsonfile.map((item,i)=>{
                console.log('item')
                return(
                    <div style={{ display:'flex', justifyContent:'center', padding:'1rem'}} >
                        <Card sx={{ minWidth: 275,margin:'20px',width:'400px',height:'225'}} value={item} >
                            <CardContent>
                                <img src={item.profile_image_url} width='60' height='60' />
                                <Typography variant="h6" component="div" sx={{display:'flex' ,justifyContent:'flex-end' ,marginBottom:'100px'}}>
                                    {item.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {item.operation_time[dayName].time_open} -  {item.operation_time[dayName].time_close}
                                </Typography>
                                <Typography variant="body2" sx={{display:'flex', justifyContent:'flex-end'}}>
                                {item.rating}
                                </Typography> 
                            </CardContent>
                            <ImageList cols={3} >
                                {item.images.map((item) => (
                                    <ImageListItem key={item.img} >
                                        <img style={{width: 120, height: 120 }} 
                                            src={`${item}`}
                                            srcSet={`${item}`}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            </Card>
                    </div>
                )
            })
        }
      </Box>
    </div>
  );
}