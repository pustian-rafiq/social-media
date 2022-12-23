import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import "./comments.scss"

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Abdullah",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Rafiqul",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className='comments'>
        <div className='writeComment'>
            <img src="/images/profile.jpg" alt="" />
            <input type="text" placeholder="Write a comment" />
            <button>Post</button>

        </div>
        {
            comments.map((comment) => (
                <div className='comment' key={comment.id}>
                    <img src={comment.profilePicture} alt="Profile" />
                    <div className='info'>
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }
    </div>
  )
}

export default Comments