const BOX_BORDER = '1px solid #000526';
const BORDER_RADIUS = '3px';

export default {
  headerHeight: '40px',
  mainColor: '#ccffcc',
  mainBoldColor: '#9dfb9d',
  mainBorder: '1px solid #ccffcc',
  blackBorder: '1px solid black',
  borderTop: '1px solid black',
  flexCenter: `display: flex;
               justify-content: center;
               align-items: center;
               `,
  columnCenter: `display: flex;
               flex-direction: column;
               align-items: center;
               `,
  spaceBetween: `display: flex;
                 justify-content: space-between;
                 align-items: center;
                  `,
  spaceAround: `display: flex;
                justify-content: space-around;
                align-items: center;
                  `,

  flexStartCenter: `display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  `,

  columnStartCenter: `display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  `,

  whiteBox: `border:${BOX_BORDER};
             border-radius:${BORDER_RADIUS};
             background-color:white;
            `,
};
