import React, { Component } from 'react';
import FzMdEditor from '@/components/FzMdEditor';
import TEMPLATE from '@/components/FzMdEditor/template';

export default class index extends Component {
  render() {
    return (
      <div>
        <FzMdEditor defaultValue={TEMPLATE.content || ''} />
      </div>
    );
  }
}
