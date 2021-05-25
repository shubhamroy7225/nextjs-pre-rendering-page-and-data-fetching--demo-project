import React from 'react';

const UserProfle = (props) => {
    return (
        <div>
            <h1>{props.user}</h1>
        </div>
    );
};

export const getServerSideProps = async (context)=>{
    console.log(context);
    return{ 
        props: {
            user:'Max'
        }
    }
}
export default UserProfle;