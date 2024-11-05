
import ShowMoreText from 'react-show-more-text';

const handleCustomClick = () => {
  const content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.";

  const handleToggle = () => {
    console.log('Text toggled');
  };

  return (
    <div>
      <h1>Show More Text with Custom Toggle</h1>
      <ShowMoreText
        lines={2}
        more='Show more'
        less='Show less'
        onClick={handleToggle}
      >
        {content}
      </ShowMoreText>
    </div>
  );
};

export default handleCustomClick;
