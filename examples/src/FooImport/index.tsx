import React, { type FC } from 'react';

import './index.less';

const FooImport: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

export default FooImport;
