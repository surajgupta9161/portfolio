import React from 'react'
import "./Projects.css"
import quizeapp from "../../assets/quize.jpg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Projects = () => {
    return (
        <div id='projects' className='projects-tab'>
            <div className='projects'>
                <h1>Projects</h1>
            </div>
            <div className='projects-card'>
                <Card sx={{ maxWidth: 345, maxheight: 320 }} className='Card-box'>
                    <CardMedia
                        sx={{ height: 130 }}
                        image={quizeapp}
                        title="Project Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            QuizeApp
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GetLink</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, maxheight: 320 }} className='Card-box'>
                    <CardMedia
                        sx={{ height: 130 }}
                        image={quizeapp}
                        title="Project Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            QuizeApp
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GetLink</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, maxheight: 320 }} className='Card-box'>
                    <CardMedia
                        sx={{ height: 130 }}
                        image={quizeapp}
                        title="Project Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            QuizeApp
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GetLink</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, maxheight: 320 }} className='Card-box'>
                    <CardMedia
                        sx={{ height: 130 }}
                        image={quizeapp}
                        title="Project Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            QuizeApp
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GetLink</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, maxheight: 320 }} className='Card-box'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={quizeapp}
                        title="Project Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            QuizeApp
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GetLink</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Projects
