
/******************************************************************************/
// Flexbox utils

const flexy = exports.flexy = (flexDirection='row', justifyContent='flex-start', alignItems='center') => `
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

exports.flexLeft = (alignItems='center') => `
  ${flexy('row', 'flex-start', alignItems)};
`;

exports.flexRight = (alignItems='center') => `
  ${flexy('row', 'flex-end', alignItems)};
`;

exports.flexTop = (alignItems='center') => `
  ${flexy('column', 'flex-start', alignItems)};
`;

exports.flexBottom = (alignItems='center') => `
  ${flexy('column', 'flex-end', alignItems)};
`;

exports.flexAroundH = (alignItems='center') => `
  ${flexy('row', 'space-around', alignItems)};
`;

exports.flexBetweenH = (alignItems='center') => `
  ${flexy('row', 'space-between', alignItems)};
`;

exports.flexAroundV = (alignItems='center') => `
  ${flexy('column', 'space-around', alignItems)};
`;

exports.flexBetweenV = (alignItems='center') => `
  ${flexy('column', 'space-between', alignItems)};
`;


/******************************************************************************/
// Spacing

exports.spaceChildrenH = (amt='10px') => `
  > *:not(:last-child) {
    margin-right: $amt;
  }
`;

exports.spaceChildrenV = (amt='10px') => `
  > *:not(:last-child) {
    margin-bottom: $amt;
  }
`;


/******************************************************************************/
// Shadows

exports.basicShadow = () => `
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`;


/******************************************************************************/
// Misc
exports.onEvent = (self=false) => `
  ${self ? '&, ' : ''} &:hover, &:active, &:focus
`;

