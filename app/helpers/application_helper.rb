module ApplicationHelper
  def meta_description(custom_description = nil, limit: 200)
    page_description = custom_description ||
                       t("#{current_translation_path}.meta_description", default: '')

    if page_description.present?
      page_description.truncate(limit)
    else
      t('layouts.application.meta_description').truncate(limit)
    end
  end

  private

  def current_translation_path
    # `company/jobs` => `company.jobs`
    namespace_and_controller = controller_path.gsub('/', '.')
    # `company.jobs.index`
    "#{namespace_and_controller}.#{action_name}"
  end
end
