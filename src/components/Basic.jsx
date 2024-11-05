
import ShowMoreText from 'react-show-more-text';

const HandlingCustomClick = () => {
  const content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return (
    <div>
      <h1>Show More Text Example</h1>
      <ShowMoreText
        lines={2} // Number of lines to show before truncating
        more='Show more' // Text for "Show more"
        less='Show less' // Text for "Show less"
        onClick={() => console.log('Toggled')} // Optional: log on toggle
      >
        {content} 
      </ShowMoreText>
    </div>
  );
};

export default HandlingCustomClick;
