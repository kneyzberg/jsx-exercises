function TweetComponent(props){
 let {username, name, message, date} = props;
 return (
   <div className="bg">
    <span><b>{name}</b></span>
    <span className="username"> {username} </span>
    <p>{message}</p>
    <div>{date}</div>
   </div>
  
 )

}