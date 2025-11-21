import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  /* BulkEmailForm.jsx Messages */
  bulkEmailSubmitButtonDefault: {
    id: 'bulk.email.submit.button.default',
    defaultMessage: 'Gửi email',
  },
  bulkEmailSubmitButtonSchedule: {
    id: 'bulk.email.submit.button.schedule',
    defaultMessage: 'Lên lịch email',
  },
  bulkEmailSubmitButtonPending: {
    id: 'bulk.email.submit.button.pending',
    defaultMessage: 'Đang gửi',
  },
  bulkEmailSubmitButtonComplete: {
    id: 'bulk.email.submit.button.send.complete',
    defaultMessage: 'Đã tạo email',
  },
  bulkEmailSubmitButtonError: {
    id: 'bulk.email.submit.button.error',
    defaultMessage: 'Lỗi',
  },
  bulkEmailSubmitButtonCompleteSchedule: {
    id: 'bulk.email.submit.button.schedule.complete',
    defaultMessage: 'Đã lên lịch xong',
  },
  bulkEmailTaskAlertRecipients: {
    id: 'bulk.email.task.alert.recipients',
    defaultMessage: 'Bạn đang gửi email với tiêu đề {subject} đến những người nhận sau:',
    description: 'A warning shown to the user after submitting the email, to confirm the email recipients.',
  },
  bulkEmailToolLabel: {
    id: 'bulk.email.tool.label',
    defaultMessage: 'Email',
    description: 'Tool label. Describes the function of the tool (to send email).',
  },
  bulkEmailSubjectLabel: {
    id: 'bulk.email.subject.label',
    defaultMessage: 'Tiêu đề',
    description: 'Email subject line input label. Meant to have colon or equivilant punctuation.',
  },
  bulkEmailFormSubjectTip: {
    id: 'bulk.email.form.subject.tip',
    defaultMessage: '(Tối đa 128 ký tự)',
    description: 'Default Subject tip',
  },
  bulkEmailFormSubjectError: {
    id: 'bulk.email.form.subject.error',
    defaultMessage: 'Tiêu đề là bắt buộc',
    description: 'An Error message located under the subject line. Visible only on failure.',
  },
  bulkEmailBodyLabel: {
    id: 'bulk.email.body.label',
    defaultMessage: 'Nội dung',
    description: 'Email Body label. Meant to have colon or equivilant punctuation.',
  },
  bulkEmailFormBodyError: {
    id: 'bulk.email.form.body.error',
    defaultMessage: 'Nội dung không được để trống',
    description: 'An error message located under the body editor. Visible only on failure.',
  },
  bulkEmailInstructionsProofreading: {
    id: 'bulk.email.instructions.proofreading',
    defaultMessage: 'Chúng tôi khuyến nghị không gửi quá một email mỗi tuần cho người học. Trước khi gửi email, hãy xem lại nội dung cẩn thận và gửi thử cho chính bạn trước để xem trước định dạng và đảm bảo hình ảnh nhúng cũng như liên kết hoạt động chính xác.',
    description: 'A set of instructions to give users a heads up about the formatting of the email they are about to send',
  },
  bulkEmailInstructionsCaution: { id: 'bulk.email.instructions.caution', defaultMessage: 'Lưu ý!' },

  bulkEmailInstructionsCautionMessage: {
    id: 'bulk.email.instructions.caution.message.new.email',
    defaultMessage:
      ' When you select Send Email, you are creating a new email message that is added to the queue for sending, and cannot be cancelled.',
    description: 'A warning about how emails are sent out to users',
  },
  bulkEmailFormScheduleBox: {
    id: 'bulk.email.form.scheduleBox',
    defaultMessage: 'Lên lịch email này cho ngày tương lai',
    description: 'Checkbox to schedule sending the email at a later date',
  },
  bulkEmailSendEmailButton: {
    id: 'bulk.email.send.email.button',
    defaultMessage: 'Gửi email',
    description: 'Schedule/Send email button',
  },
  bulkEmailFormError: {
    id: 'bulk.email.form.error',
    defaultMessage: 'Đã xảy ra lỗi khi cố gửi email.',
    description: 'An Error message located under the submit button for the email form. Visible only on a failure.',
  },
  bulkEmailFormSuccess: {
    id: 'bilk.email.form.success',
    defaultMessage: 'Đã tạo email thành công',
  },
  bulkEmailFormScheduledSuccess: {
    id: 'bulk.email.form.scheduled.success',
    defaultMessage: 'Đã lên lịch email thành công',
  },
  bulkEmailSubmitButtonReschedule: {
    id: 'bulk.email.submit.button.reschedule',
    defaultMessage: 'Đổi lịch email',
  },
  bulkEmailTaskAlertEditingDate: {
    id: 'bulk.email.task.alert.editing',
    defaultMessage: 'Bạn đang chỉnh sửa email đã lên lịch sẽ được gửi vào: {dateTime}',
    description: 'This alert pops up before submitting when editing an email that has already been scheduled',
  },
  bulkEmailTaskAlertEditingSubject: {
    id: 'bulk.email.task.alert.subject',
    defaultMessage: 'với tiêu đề: {subject}',
  },
  bulkEmailTaskAlertEditingTo: {
    id: 'bulk.email.task.alert.to',
    defaultMessage: 'đến người nhận:',
  },
  bulkEmailTaskAlertEditingWarning: {
    id: 'bulk.email.task.alert.warning',
    defaultMessage: 'Thao tác này sẽ không tạo nhiệm vụ email lên lịch mới mà thay vào đó sẽ ghi đè lên nhiệm vụ hiện đang được chọn. Bạn có muốn ghi đè email đã lên lịch này không?',
    description: 'This alert pops up before submitting when editing an email that has already been scheduled',
  },
});

export default messages;
