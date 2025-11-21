import React from 'react';
import PropTypes from 'prop-types';

import { getConfig } from '@edx/frontend-platform';
import { Hyperlink, Alert } from '@openedx/paragon';
import { WarningFilled } from '@openedx/paragon/icons';
import { FormattedMessage } from '@edx/frontend-platform/i18n';

export default function BulkEmailPendingTasksAlert(props) {
  const { courseId } = props;

  return (
    <Alert variant="warning" icon={WarningFilled}>
      <FormattedMessage
        id="bulk.email.pending.tasks.description.one"
        defaultMessage="Để xem tất cả các tác vụ đang chờ, bao gồm cả email, hãy truy cập&nbsp;"
      />
      <Hyperlink
        destination={`${getConfig().LMS_BASE_URL}/courses/${courseId}/instructor#view-course-info`}
        target="_blank"
        isInline
        showLaunchIcon={false}
      >
        <FormattedMessage
          id="bulk.email.pending.tasks.link"
          defaultMessage="Thông tin khóa học"
        />
      </Hyperlink>
      <FormattedMessage
        id="bulk.email.pending.tasks.description.two"
        defaultMessage="&nbsp;trong Bảng điều khiển giảng viên."
      />
    </Alert>

  );
}

BulkEmailPendingTasksAlert.propTypes = {
  courseId: PropTypes.string.isRequired,
};
