import MailArchiverPageReducer from '../../../src/Pages/Play/MailArchiverPageReducer';
import { creatAction, ActoinTypes, Show_Body } from '../../../src/Types/ActionTypes';
import { MailArchiverState } from '../../../src/Pages/Play/TitterTooterState';
import { IShowBodyAction } from '../../../src/Types/IShowBodyAction';

import { EmailsDb } from '../../../src/Data/EmailsData';

describe('init app reducer', () => {
  const data = { ...EmailsDb };

  it('should set ShowBody to true', () => {
    const show: IShowBodyAction = {
      error: false,
      meta: null,
      payload: data[0],
      type: Show_Body,
    };

    expect(MailArchiverPageReducer(data, show).ShowBody).toEqual(true);
  });
});
