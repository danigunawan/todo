# frozen_string_literal: true

module Auth
  class FailureApp < Devise::FailureApp
    def respond
      self.status = 401
      self.content_type = 'application/json'
      self.response_body = [{ message: i18n_message }].to_json
    end
  end
end
