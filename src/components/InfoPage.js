import React, { useState, useEffect } from 'react';

// I have used material ui for styling purpose..
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Axios used for fetching the data..
import axios from 'axios';


// Make style function for card ..
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



const InfoPage = (props) => {


    // To get the porps values i.e posts informations..
    const postInfo = props.location.data.info.post;


    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState('Anonymous');




    // Function that is used to set the Comments for a particular post by fetching the data from the jsonplaceholder and the discription given in the question..
    const getComment = async (id) => {
        try {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(res => {

                    setComments(res.data);
                }
                ).catch(err => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error.message);

        }


    }


    // Function used to set the name of the author for the post..
    const getAuthor = async (userId) => {
        try {
            await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(res => {

                    setAuthor(res.data.name);
                }
                ).catch(err => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error.message);

        }


    }

    // for styling purpose of the card.
    const classes = useStyles();


    // This will automatically fetch data for comments and the post author as it is using the setAuthor and setComments function.
    useEffect(() => {
        getComment(postInfo.id);
        getAuthor(postInfo.userId);
    }, [postInfo.id, postInfo.userId]);




// Main return function...
    return (
        <div>
        {/* Card to show the data for the post such as title and author name.. */}
            <Card className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        {postInfo.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Author Name : {author}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {postInfo.body}
                    </Typography>
                </CardContent>
            </Card>

            <h1>Comments</h1>
            <ol>
            {/* Here we are taking the comments as been fetched from the setComments above */}
                {comments.map(comment => (


                    <div key={comment.id}>
                  <li>  <p>
                      Name : {comment.name}</p>
                    <p>  Email : {comment.email} </p>
                    <p>{comment.body} </p><br></br><br></br></li>
                    </div>

                ))}

            </ol>
        </div>

    )
}
export default InfoPage;
