
import ShowMoreText from 'react-show-more-text';


const Custom = () => {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.";

  return (
    <div className="app-container">
      <h1>Custom Show More Text Example</h1>
      <ShowMoreText
        lines={2}
        more='Read more'
        less='Read less'
        anchorClass='custom-anchor'
        className='custom-text'
      >
        {content}
      </ShowMoreText>
    </div>
  );
};

export default Custom;
