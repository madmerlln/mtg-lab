import React from 'react';

import StyledWrap from './style';

export default function Wrap({children}) {
    return (
        <StyledWrap>
            {children}
        </StyledWrap>
    )
}
