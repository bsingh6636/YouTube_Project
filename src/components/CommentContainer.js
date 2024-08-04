import React from 'react'

export const CommentContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments: laure  </h1>
            <CommentList commentData={commentData} />
          
        </div>
    )
}

export const SingleComment = ({ commentData }) => {
    const { name, body, title } = commentData
    return (
        <div className='shadow-sm bg-gray-100 rounded-lg m-2 my-2 p-2 flex'>
            <img className='h-7 my-2' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' alt='user icon' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{title}</p>

            </div>

        </div>
    )
}

const CommentList = ({ commentData }) => {
    return commentData.map(data => 
    ( <div> <SingleComment key={data.it} commentData={data} />
         {data.replies && <div className='ml-3 p-5 border border-l-black'>
          
            <CommentList key={data.it+data.userId} commentData={data.replies}/>
                </div> }
     </div>)
)
}
const commentData = [
    {
        "userId": 1,
        "name": "Alice", // Added random name
        "it": 1,
        "title": "are or do repels provide blacked out except option criticizes",
        "body": "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect"
        , "replies": [
           { "userId": 1,
            "name": "Grace", // Added random name
            "it": 7,
            "title": "but the great easy",
            "body": "may it please some with pain that the things of life\nfor the great who are the ones who are whom no one or often\nwill repulse them because\nthey are to follow them but those which"
           ,"replies": [{
            "userId": 1,
            "name": "Frank", // Added random name
            "it": 6,
            "title": "I will open them to great pain because",
            "body": " life that things should be followed; no pain will blame the blessed ones; nor will they"}], 
        }
        ]
    },
    {
        "userId": 1,
        "name": "Bob", // Added random name
        "it": 2,
        "title": "who is being",
        "body": "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of pleasure; nor will there be any trouble, so as to reject them."
    },
    {
        "userId": 1,
        "name": "Charlie", // Added random name
        "it": 3,
        "title": "she repels troubles as if she were training, whoever she is",
        "body": "and just but by what right\nthe lust of every one who chooses to be blinded, or to\nthe lust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or"
         ,"replies": [
            { "userId": 1,
             "name": "Grace", // Added random name
             "it": 7,
             "title": "but the great easy",
             "body": "may it please some with pain that the things of life\nfor the great who are the ones who are whom no one or often\nwill repulse them because\nthey are to follow them but those which"
            ,"replies": [{
             "userId": 1,
             "name": "Frank", // Added random name
             "it": 6,
             "title": "I will open them to great pain because",
             "body": " life that things should be followed; no pain will blame the blessed ones; nor will they"}], 
         }
         ]     
    },
    {
        "userId": 1,
        "name": "David", // Added random name
        "it": 4,
        "title": "and he is blinded",
        "body": "by rejecting any and often to obtain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things"
    },
    {
        "userId": 1,
        "name": "Eve", // Added random name
        "it": 5,
        "title": "they don't know what they hate",
        "body": "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held"
    },
    {
        "userId": 1,
        "name": "Frank", // Added random name
        "it": 6,
        "title": "I will open them to great pain because",
        "body": " life that things should be followed; no pain will blame the blessed ones; nor will they"
    },
    {
        "userId": 1,
        "name": "Grace", // Added random name
        "it": 7,
        "title": "but the great easy",
        "body": "may it please some with pain that the things of life\nfor the great who are the ones who are whom no one or often\nwill repulse them because\nthey are to follow them but those which"
    }
];


