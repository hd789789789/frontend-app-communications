import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  /* BulkEmailContentHistory.jsx Messages */
  errorFetchingEmailHistoryData: {
    id: 'bulk.email.content.history.table.alert.errorFetchingData',
    defaultMessage: 'Đã xảy ra lỗi khi truy xuất dữ liệu lịch sử email cho khóa học này. Vui lòng thử lại sau.',
  },
  noEmailData: {
    id: 'bulk.email.content.history.table.alert.noEmailData',
    defaultMessage: 'Không có lịch sử email nào cho khóa học này.',
  },
  buttonViewMessage: {
    id: 'bulk.email.content.history.table.button.viewMessage',
    defaultMessage: 'Xem tin nhắn',
  },
  modalMessageSubject: {
    id: 'bulk.email.content.history.table.modal.subject',
    defaultMessage: 'Tiêu đề:',
  },
  modalMessageSentBy: {
    id: 'bulk.email.content.history.table.modal.sentBy',
    defaultMessage: 'Người gửi:',
  },
  modalMessageTimeSent: {
    id: 'bulk.email.content.history.table.modal.timeSent',
    defaultMessage: 'Thời gian gửi:',
  },
  modalMessageSentTo: {
    id: 'bulk.email.content.history.table.modal.sentTo',
    defaultMessage: 'Gửi đến:',
  },
  modalMessageBody: {
    id: 'bulk.email.content.history.table.modal.messageBody',
    defaultMessage: 'Tin nhắn:',
  },
  modalCloseButton: {
    id: 'bulk.email.tool.close.modalDialog.button',
    defaultMessage: 'Đóng',
  },
  emailHistoryTableViewMessageInstructions: {
    id: 'bulk.email.content.history.table.viewMessageInstructions',
    defaultMessage: 'Để đọc email đã gửi, hãy nhấp vào nút `Xem tin nhắn` trong bảng.',
  },
  emailHistoryTableColumnHeaderSubject: {
    id: 'bulk.email.content.history.table.column.header.subject',
    defaultMessage: 'Tiêu đề',
  },
  emailHistoryTableColumnHeaderAuthor: {
    id: 'bulk.email.content.history.table.column.header.author',
    defaultMessage: 'Người gửi',
  },
  emailHistoryTableColumnHeaderRecipients: {
    id: 'bulk.email.content.history.table.column.header.recipients',
    defaultMessage: 'Gửi đến',
  },
  emailHistoryTableColumnHeaderTimeSent: {
    id: 'bulk.email.content.history.table.column.header.timeSent',
    defaultMessage: 'Thời gian gửi',
  },
  emailHistoryTableColumnHeaderNumberSent: {
    id: 'bulk.email.content.history.table.column.header.numberSent',
    defaultMessage: 'Số lượng đã gửi',
  },
  emailHistoryTableSectionButtonHeader: {
    id: 'bulk.email.content.history.table.button.header',
    defaultMessage: 'Xem nội dung email đã gửi trước đó',
  },
  emailHistoryTableSectionButton: {
    id: 'bulk.email.content.history.table.button',
    defaultMessage: 'Hiển thị lịch sử email đã gửi',
  },
  /* BulkEmailTaskManager.jsx messages */
  pendingTasksHeader: {
    id: 'bulk.email.pending.tasks.header',
    defaultMessage: 'Tác vụ đang chờ đã được di chuyển',
  },
  emailTaskHistoryHeader: {
    id: 'bulk.email.email.task.history.header',
    defaultMessage: 'Lịch sử tác vụ email',
  },
  /* BulkEmailPendingTasks.jsx messages */
  pendingTaskSectionInfo: {
    id: 'bulk.email.pending.tasks.section.info',
    defaultMessage: 'Các thao tác email chạy nền. Trạng thái của bất kỳ tác vụ đang hoạt động nào - bao gồm cả tác vụ email - sẽ hiển thị trong bảng bên dưới.',
  },
  errorFetchingPendingTaskData: {
    id: 'bulk.email.pending.tasks.table.alert.errorFetchingData',
    defaultMessage: 'Lỗi khi tải dữ liệu tác vụ đang chạy. Yêu cầu này sẽ được thử lại tự động.',
  },
  noPendingTaskData: {
    id: 'bulk.email.pending.tasks.table.alert.noTaskData',
    defaultMessage: 'Không có tác vụ nào đang chạy.',
  },
  /* BulkEmailTaskHistory.jsx messages */
  emailTaskHistoryTableSectionButtonHeader: {
    id: 'bulk.email.task.history.table.button.header',
    defaultMessage: 'Xem trạng thái của tất cả tác vụ email được tạo cho khóa học này',
  },
  emailTaskHistoryTableSectionButton: {
    id: 'bulk.email.task.history.table.button',
    defaultMessage: 'Hiển thị lịch sử tác vụ email',
  },
  errorFetchingTaskHistoryData: {
    id: 'bulk.email.task.history.table.alert.errorFetchingData',
    defaultMessage: 'Lỗi khi tải dữ liệu lịch sử tác vụ email cho khóa học này. Vui lòng thử lại sau.',
  },
  noTaskHistoryData: {
    id: 'bulk.email.task.history.table.alert.noTaskData',
    defaultMessage: 'Không có lịch sử tác vụ email nào cho khóa học này.',
  },
  /* Common Messages */
  taskHistoryTableColumnHeaderTaskType: {
    id: 'bulk.email.task.history.table.column.header.taskType',
    defaultMessage: 'Loại tác vụ',
  },
  taskHistoryTableColumnHeaderTaskInputs: {
    id: 'bulk.email.task.history.table.column.header.taskInputs',
    defaultMessage: 'Dữ liệu đầu vào',
  },
  taskHistoryTableColumnHeaderTaskId: {
    id: 'bulk.email.task.history.table.column.header.taskId',
    defaultMessage: 'Mã tác vụ',
  },
  taskHistoryTableColumnHeaderTaskRequester: {
    id: 'bulk.email.task.history.table.column.header.taskRequester',
    defaultMessage: 'Người yêu cầu',
  },
  taskHistoryTableColumnHeaderTaskSubmittedDate: {
    id: 'bulk.email.task.history.table.column.header.taskSubmittedDate',
    defaultMessage: 'Đã gửi',
  },
  taskHistoryTableColumnHeaderTaskDuration: {
    id: 'bulk.email.task.history.table.column.header.taskDuration',
    defaultMessage: 'Thời lượng (giây)',
  },
  taskHistoryTableColumnHeaderTaskState: {
    id: 'bulk.email.task.history.table.column.header.taskState',
    defaultMessage: 'Trạng thái',
  },
  taskHistoryTableColumnHeaderTaskStatus: {
    id: 'bulk.email.task.history.table.column.header.taskStatus',
    defaultMessage: 'Tình trạng',
  },
  taskHistoryTableColumnHeaderTaskProgress: {
    id: 'bulk.email.task.history.table.column.header.taskProgress',
    defaultMessage: 'Tiến độ tác vụ',
  },
  scheduledEmailsTableHeader: {
    id: 'bulk.email.scheduled.emails.table.header',
    defaultMessage: 'Email đã lên lịch',
  },
});

export default messages;
