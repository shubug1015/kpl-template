const BOX_BORDER = '1px solid #000526';
const BORDER_RADIUS = '3px';

export default {
  headerHeight: '80px',
  bgColor: '#FAFAFA',
  fontColor: 'black',
  mainColor: '#6fd400',
  whiteBorder: '1px solid #FFFFFF',
  blackBorder: '1px solid black',
  textSelection: 'background: #6fd400; color: #ffffff;',
  pagePadding: '250px',
  flexCenter: `display: flex;
               justify-content: center;
               align-items: center;
               `,
  flexStartCenter: `display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    `,
  flexEndCenter: `display: flex;
                  justify-content: flex-end;
                  align-items: center;
                  `,
  flexBetweenCenter: `display: flex;
                      justify-content: space-between;
                      align-items: center;
                      `,
  flexAroundCenter: `display: flex;
                     justify-content: space-around;
                     align-items: center;
                     `,
  columnCenter: `display: flex;
                 flex-direction: column;
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
