import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  /* BulkEmailScheduledEmailsTable.jsx Messages */
  bulkEmailScheduledEmailsTableErrorHeader: {
    id: 'bulk.email.scheduled.emails.table.error.header',
    defaultMessage: 'Lỗi',
  },

  bulkEmailScheduledEmailsTableError: {
    id: 'bulk.email.scheduled.emails.table.error',
    defaultMessage: 'Đã xảy ra lỗi khi truy xuất thông tin email đã lên lịch. Vui lòng thử lại sau.',
    description: 'An error message that shows if the app is unable to display scheduled emails in the table',
  },
  bulkEmailScheduledEmailsTableSendDate: {
    id: 'bulk.email.scheduled.emails.table.sendDate',
    defaultMessage: 'Ngày gửi',
  },
  bulkEmailScheduledEmailsTableSendTo: {
    id: 'bulk.email.scheduled.emails.table.sendTo',
    defaultMessage: 'Gửi đến',
  },
  bulkEmailScheduledEmailsTableSubject: {
    id: 'bulk.email.scheduled.emails.table.subject',
    defaultMessage: 'Tiêu đề',
  },
  bulkEmailScheduledEmailsTableAuthor: {
    id: 'bulk.email.scheduled.emails.table.Author',
    defaultMessage: 'Tác giả',
  },
  bulkEmailScheduledEmailsTableConfirmDelete: {
    id: 'bulk.email.scheduled.emails.table.confirm.delete',
    defaultMessage: 'Bạn đang xóa email đã lên lịch sẽ được gửi vào {date}. Email sẽ không được gửi và lịch đã đặt sẽ bị hủy. Bạn có chắc chắn không?',
  },
});

export default messages;
