import type { Schema, Attribute } from '@strapi/strapi';

export interface EventEventGallery extends Schema.Component {
  collectionName: 'components_event_event_galleries';
  info: {
    displayName: 'Event Gallery';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface EventEventItem extends Schema.Component {
  collectionName: 'components_event_event_items';
  info: {
    displayName: 'Event Item';
    description: '';
  };
  attributes: {
    date: Attribute.String & Attribute.Required & Attribute.DefaultTo<'23,sep'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    time: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'02.00 PM'>;
    location: Attribute.String & Attribute.Required;
    free: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    image: Attribute.Media<'images'>;
  };
}

export interface EventEventSpeaker extends Schema.Component {
  collectionName: 'components_event_event_speakers';
  info: {
    displayName: 'Event Speaker';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    card: Attribute.Component<'event.speaker-card', true>;
  };
}

export interface EventHeroHighlight extends Schema.Component {
  collectionName: 'components_event_hero_highlights';
  info: {
    displayName: 'Hero Highlight';
  };
  attributes: {
    quantity: Attribute.String & Attribute.Required;
    about: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface EventHero extends Schema.Component {
  collectionName: 'components_event_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    cover_image: Attribute.Media<'images'> & Attribute.Required;
    hero_highlight: Attribute.Component<'event.hero-highlight', true>;
    location: Attribute.String;
  };
}

export interface EventSpeakerCard extends Schema.Component {
  collectionName: 'components_event_speaker_cards';
  info: {
    displayName: 'Speaker Card';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    name: Attribute.String;
    occupation: Attribute.String;
  };
}

export interface EventUpcomingEvents extends Schema.Component {
  collectionName: 'components_event_upcoming_events';
  info: {
    displayName: 'Upcoming Events';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    event_card: Attribute.Component<'event.event-item', true>;
  };
}

export interface ResourceCounselingForm extends Schema.Component {
  collectionName: 'components_resource_counseling_forms';
  info: {
    displayName: 'Counseling Form';
  };
  attributes: {
    title_first_line: Attribute.String;
    title_second_line: Attribute.String;
    interested_degree: Attribute.Component<'resource.degree', true>;
    cta: Attribute.String;
  };
}

export interface ResourceDegree extends Schema.Component {
  collectionName: 'components_resource_degrees';
  info: {
    displayName: 'Degree';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ResourceFiles extends Schema.Component {
  collectionName: 'components_resource_files';
  info: {
    displayName: 'Files';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    level: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    cta: Attribute.String;
    cta_file: Attribute.Media<'files'>;
  };
}

export interface ResourceHero extends Schema.Component {
  collectionName: 'components_resource_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cover_image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ResourceResourceFile extends Schema.Component {
  collectionName: 'components_resource_resource_files';
  info: {
    displayName: 'Resource File';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    sub_title: Attribute.String & Attribute.Required;
    sub_description: Attribute.String & Attribute.Required;
    files: Attribute.Component<'resource.files', true>;
  };
}

export interface ScholarshipDateComponent extends Schema.Component {
  collectionName: 'components_scholarship_date_components';
  info: {
    displayName: 'Date Component';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
    date: Attribute.String;
  };
}

export interface ScholarshipDocumentsCard extends Schema.Component {
  collectionName: 'components_scholarship_documents_cards';
  info: {
    displayName: 'Documents Card';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface ScholarshipHero extends Schema.Component {
  collectionName: 'components_scholarship_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cover_image: Attribute.Media<'images'>;
    scholarship_name: Attribute.String;
    place: Attribute.String;
  };
}

export interface ScholarshipKeyDate extends Schema.Component {
  collectionName: 'components_scholarship_key_dates';
  info: {
    displayName: 'Key Date';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Component<'scholarship.date-component', true>;
  };
}

export interface ScholarshipOverview extends Schema.Component {
  collectionName: 'components_scholarship_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    scholarship_type: Attribute.Component<'scholarship.scholarship-type', true>;
    level_of_study: Attribute.String;
    grant: Attribute.String;
    duration: Attribute.String;
  };
}

export interface ScholarshipScholarshipType extends Schema.Component {
  collectionName: 'components_scholarship_scholarship_types';
  info: {
    displayName: 'Scholarship Type';
  };
  attributes: {
    type: Attribute.String;
  };
}

export interface ScholarshipSupportingDocuments extends Schema.Component {
  collectionName: 'components_scholarship_supporting_documents';
  info: {
    displayName: 'Supporting Documents';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    documents: Attribute.Component<'scholarship.documents-card', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface UniversityAdmissionRequirements extends Schema.Component {
  collectionName: 'components_university_admission_requirements';
  info: {
    displayName: 'Admission Requirements';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    requirements: Attribute.Component<'university.requirement-item', true>;
  };
}

export interface UniversityAlumniPerson extends Schema.Component {
  collectionName: 'components_university_alumni_people';
  info: {
    displayName: 'Alumni Person';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface UniversityAlumni extends Schema.Component {
  collectionName: 'components_university_alumni';
  info: {
    displayName: 'Alumni';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    alumni_person_list: Attribute.Component<'university.alumni-person', true>;
  };
}

export interface UniversityDemographics extends Schema.Component {
  collectionName: 'components_university_demographics';
  info: {
    displayName: 'Demographics';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    percentage: Attribute.String & Attribute.Required;
  };
}

export interface UniversityGallery extends Schema.Component {
  collectionName: 'components_university_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    video_link: Attribute.String;
    images: Attribute.Media<'images', true>;
  };
}

export interface UniversityOtherUniversities extends Schema.Component {
  collectionName: 'components_university_other_universities';
  info: {
    displayName: 'Other Universities';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface UniversityOutcomes extends Schema.Component {
  collectionName: 'components_university_outcomes';
  info: {
    displayName: 'Outcomes';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text & Attribute.Required;
    images: Attribute.Media<'images', true> & Attribute.Required;
    career_title: Attribute.Component<'vdesh.service-item', true>;
  };
}

export interface UniversityProgramOffered extends Schema.Component {
  collectionName: 'components_university_program_offereds';
  info: {
    displayName: 'Program Offered';
  };
  attributes: {
    programs: Attribute.Relation<
      'university.program-offered',
      'oneToMany',
      'api::program.program'
    >;
  };
}

export interface UniversityRequirementItem extends Schema.Component {
  collectionName: 'components_university_requirement_items';
  info: {
    displayName: 'Requirement Item';
  };
  attributes: {
    requirement: Attribute.String & Attribute.Required;
  };
}

export interface UniversityStudentStatistic extends Schema.Component {
  collectionName: 'components_university_student_statistics';
  info: {
    displayName: 'Student Statistic';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    total_undegrad_graduate: Attribute.String & Attribute.Required;
    total_foreign_student: Attribute.String & Attribute.Required;
    demographics: Attribute.Component<'university.demographics', true>;
    gender: Attribute.Component<'university.demographics', true>;
  };
}

export interface UniversityTestimonialData extends Schema.Component {
  collectionName: 'components_university_testimonial_data';
  info: {
    displayName: 'Testimonial Data';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    message: Attribute.Text & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    subject: Attribute.String & Attribute.Required;
  };
}

export interface UniversityTestimonial extends Schema.Component {
  collectionName: 'components_university_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    testimonial_data: Attribute.Component<'university.testimonial-data', true>;
  };
}

export interface VdeshAboutCompany extends Schema.Component {
  collectionName: 'components_vdesh_about_companies';
  info: {
    displayName: 'About Company';
    description: '';
  };
  attributes: {
    section_title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    description: Attribute.Text & Attribute.Required;
    lists: Attribute.Component<'vdesh.simplify-process-item', true>;
  };
}

export interface VdeshButtonGroup extends Schema.Component {
  collectionName: 'components_vdesh_button_groups';
  info: {
    displayName: 'Button Group';
  };
  attributes: {
    title: Attribute.String;
    bg_color: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface VdeshHelpfulLinks extends Schema.Component {
  collectionName: 'components_vdesh_helpful_links';
  info: {
    displayName: 'Helpful Links';
  };
  attributes: {
    link_title: Attribute.String & Attribute.Required;
    link_url: Attribute.String & Attribute.Required;
  };
}

export interface VdeshHowVdeshDifferent extends Schema.Component {
  collectionName: 'components_vdesh_how_vdesh_differents';
  info: {
    displayName: 'How Vdesh Different';
  };
  attributes: {
    section_title: Attribute.String & Attribute.Required;
    without_vdesh_title: Attribute.String & Attribute.Required;
    without_vdesh_lists: Attribute.Component<'vdesh.single-list', true>;
    with_vdesh_title: Attribute.String & Attribute.Required;
    with_vdesh_lists: Attribute.Component<'vdesh.single-list', true>;
  };
}

export interface VdeshLists extends Schema.Component {
  collectionName: 'components_vdesh_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    short_description: Attribute.String & Attribute.Required;
  };
}

export interface VdeshNewsAndReports extends Schema.Component {
  collectionName: 'components_vdesh_news_and_reports';
  info: {
    displayName: 'News and Reports';
    description: '';
  };
  attributes: {
    news_image: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
    date: Attribute.String & Attribute.Required;
  };
}

export interface VdeshServiceItem extends Schema.Component {
  collectionName: 'components_vdesh_service_items';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface VdeshServiceSection extends Schema.Component {
  collectionName: 'components_vdesh_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    service_name: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    cta: Attribute.String & Attribute.Required;
    cta_slug: Attribute.String & Attribute.Required;
    service_icon: Attribute.Media<'images'> & Attribute.Required;
    helpful_links: Attribute.Component<'vdesh.helpful-links', true>;
    service_item: Attribute.Component<'vdesh.service-item', true>;
  };
}

export interface VdeshSimplifyProcessItem extends Schema.Component {
  collectionName: 'components_vdesh_simplify_process_items';
  info: {
    displayName: 'Simplify Process Item';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    short_description: Attribute.Text & Attribute.Required;
  };
}

export interface VdeshSimplifyProcess extends Schema.Component {
  collectionName: 'components_vdesh_simplify_processes';
  info: {
    displayName: 'Simplify Process';
  };
  attributes: {
    section_title: Attribute.String & Attribute.Required;
    process_left: Attribute.Component<'vdesh.simplify-process-item'>;
    process_middle: Attribute.Component<'vdesh.simplify-process-item'>;
    process_right: Attribute.Component<'vdesh.simplify-process-item'>;
  };
}

export interface VdeshSingleList extends Schema.Component {
  collectionName: 'components_vdesh_single_lists';
  info: {
    displayName: 'Single List';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface VdeshSuccessStories extends Schema.Component {
  collectionName: 'components_vdesh_success_stories';
  info: {
    displayName: 'Success Stories';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
  };
}

export interface VdeshTestimonialData extends Schema.Component {
  collectionName: 'components_vdesh_testimonial_data';
  info: {
    displayName: 'Testimonial Data';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    message: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    name: Attribute.String & Attribute.Required;
    city_and_institutename: Attribute.Text & Attribute.Required;
  };
}

export interface VdeshTestimonial extends Schema.Component {
  collectionName: 'components_vdesh_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    message: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    name: Attribute.String & Attribute.Required;
    city_and_institute: Attribute.String & Attribute.Required;
  };
}

export interface VdeshVdeshHero extends Schema.Component {
  collectionName: 'components_vdesh_vdesh_heroes';
  info: {
    displayName: 'Vdesh Hero';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    buttons: Attribute.Component<'vdesh.button-group', true>;
    hero_image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface VdeshWhyChoose extends Schema.Component {
  collectionName: 'components_vdesh_why_chooses';
  info: {
    displayName: 'Why Choose';
  };
  attributes: {
    section_title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    lists: Attribute.Component<'vdesh.lists', true>;
  };
}

export interface VstudyAboutCountry extends Schema.Component {
  collectionName: 'components_vstudy_about_countries';
  info: {
    displayName: 'About Country';
  };
  attributes: {
    flag: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    about_content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface VstudyApplicationDeadlineItem extends Schema.Component {
  collectionName: 'components_vstudy_application_deadline_items';
  info: {
    displayName: 'Application Deadline Item';
  };
  attributes: {
    semester_title: Attribute.String;
    domestic_deadline: Attribute.String;
    international_deadline: Attribute.String;
  };
}

export interface VstudyApplicationDeadline extends Schema.Component {
  collectionName: 'components_vstudy_application_deadlines';
  info: {
    displayName: 'Application Deadline';
  };
  attributes: {
    title: Attribute.String;
    application_deadline_item: Attribute.Component<
      'vstudy.application-deadline-item',
      true
    >;
  };
}

export interface VstudyBachelorProgram extends Schema.Component {
  collectionName: 'components_vstudy_bachelor_programs';
  info: {
    displayName: 'Bachelor Program';
    description: '';
  };
  attributes: {
    qs_ranking: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    scholarship: Attribute.Boolean & Attribute.Required;
    overview: Attribute.Component<'vstudy.subject-overview'>;
    multiple_section: Attribute.Component<'vstudy.multiple-section', true>;
    tution_and_scholarship: Attribute.Component<'vstudy.tution-fees-and-scholarship'>;
    application_deadline: Attribute.Component<'vstudy.application-deadline'>;
    curriculum: Attribute.Component<'vstudy.curriculum'>;
    multiple_section2: Attribute.Component<'vstudy.multiple-section', true>;
  };
}

export interface VstudyCountryList extends Schema.Component {
  collectionName: 'components_vstudy_country_lists';
  info: {
    displayName: 'Country List';
    description: '';
  };
  attributes: {
    countries: Attribute.Relation<
      'vstudy.country-list',
      'oneToMany',
      'api::country.country'
    >;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface VstudyCountryScholarship extends Schema.Component {
  collectionName: 'components_vstudy_country_scholarships';
  info: {
    displayName: 'Country Scholarship';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface VstudyCurriculumItem extends Schema.Component {
  collectionName: 'components_vstudy_curriculum_items';
  info: {
    displayName: 'Curriculum Item';
  };
  attributes: {
    year: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface VstudyCurriculum extends Schema.Component {
  collectionName: 'components_vstudy_curricula';
  info: {
    displayName: 'Curriculum';
  };
  attributes: {
    title: Attribute.String;
    curriculum_item: Attribute.Component<'vstudy.curriculum-item', true>;
  };
}

export interface VstudyEventCard extends Schema.Component {
  collectionName: 'components_vstudy_event_cards';
  info: {
    displayName: 'Event Card';
    description: '';
  };
  attributes: {
    date: Attribute.String & Attribute.Required & Attribute.DefaultTo<'22,Dec'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    time: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'10.00 AM - 02.00 PM'>;
    cta: Attribute.String;
    cta_url: Attribute.String;
  };
}

export interface VstudyFacultyMembers extends Schema.Component {
  collectionName: 'components_vstudy_faculty_members';
  info: {
    displayName: 'Faculty Members';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    members: Attribute.Component<'vstudy.members', true>;
  };
}

export interface VstudyFaqQuestionAndAnswer extends Schema.Component {
  collectionName: 'components_vstudy_faq_question_and_answers';
  info: {
    displayName: 'FAQ Question and Answer';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface VstudyFaq extends Schema.Component {
  collectionName: 'components_vstudy_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    faq_item: Attribute.Component<'vstudy.faq-question-and-answer', true>;
  };
}

export interface VstudyGrowSkillScholarshipComponents extends Schema.Component {
  collectionName: 'components_vstudy_grow_skill_scholarship_components';
  info: {
    displayName: 'Grow Skill Scholarship Components';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    cta: Attribute.String;
    cta_url: Attribute.String;
  };
}

export interface VstudyGrowSkills extends Schema.Component {
  collectionName: 'components_vstudy_grow_skills';
  info: {
    displayName: 'Grow Skills';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    scholarship: Attribute.Component<
      'vstudy.grow-skill-scholarship-components',
      true
    >;
  };
}

export interface VstudyHero extends Schema.Component {
  collectionName: 'components_vstudy_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    hero_image: Attribute.Media<'images'>;
    lists: Attribute.Component<'vdesh.simplify-process-item', true>;
  };
}

export interface VstudyMastersPrograms extends Schema.Component {
  collectionName: 'components_vstudy_masters_programs';
  info: {
    displayName: 'Masters Programs';
    description: '';
  };
  attributes: {
    qs_ranking: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    scholarship: Attribute.Boolean & Attribute.Required;
    overview: Attribute.Component<'vstudy.subject-overview'>;
    multiple_section: Attribute.Component<'vstudy.multiple-section', true>;
    tution_and_scholarship: Attribute.Component<'vstudy.tution-fees-and-scholarship'>;
    application_deadline: Attribute.Component<'vstudy.application-deadline'>;
    curriculum: Attribute.Component<'vstudy.curriculum'>;
    multiple_section2: Attribute.Component<'vstudy.multiple-section', true>;
  };
}

export interface VstudyMembers extends Schema.Component {
  collectionName: 'components_vstudy_members';
  info: {
    displayName: 'Members';
  };
  attributes: {
    name: Attribute.String;
    designation: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface VstudyMultipleSection extends Schema.Component {
  collectionName: 'components_vstudy_multiple_sections';
  info: {
    displayName: 'Multiple_section';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    title: Attribute.String;
  };
}

export interface VstudyNewsAndReports extends Schema.Component {
  collectionName: 'components_vstudy_news_and_reports';
  info: {
    displayName: 'News and Reports';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    news_card: Attribute.Component<'vdesh.news-and-reports', true>;
  };
}

export interface VstudyPriceCard extends Schema.Component {
  collectionName: 'components_vstudy_price_cards';
  info: {
    displayName: 'Price Card';
  };
  attributes: {
    plan_type: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    amount: Attribute.String & Attribute.Required;
    list: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface VstudyPricePlan extends Schema.Component {
  collectionName: 'components_vstudy_price_plans';
  info: {
    displayName: 'Price Plan';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    price_card: Attribute.Component<'vstudy.price-card', true>;
  };
}

export interface VstudyProgramDirectorMessage extends Schema.Component {
  collectionName: 'components_vstudy_program_director_messages';
  info: {
    displayName: 'Program Director Message';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    name: Attribute.String;
    designation: Attribute.String;
    message: Attribute.Text;
  };
}

export interface VstudyStudyLevels extends Schema.Component {
  collectionName: 'components_vstudy_study_levels';
  info: {
    displayName: 'Study Levels';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface VstudySubjectOverview extends Schema.Component {
  collectionName: 'components_vstudy_subject_overviews';
  info: {
    displayName: 'Subject Overview';
  };
  attributes: {
    main_subject: Attribute.String;
    degree: Attribute.String;
    study_level: Attribute.String;
    study_mode: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface VstudySubject extends Schema.Component {
  collectionName: 'components_vstudy_subjects';
  info: {
    displayName: 'Subject';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    cover_image: Attribute.Media<'images'>;
    qs_ranking: Attribute.String & Attribute.Required;
    duration: Attribute.String & Attribute.Required;
    scholarship: Attribute.Boolean & Attribute.Required;
    overview: Attribute.Component<'vstudy.subject-overview'>;
  };
}

export interface VstudyTestimonialItem extends Schema.Component {
  collectionName: 'components_vstudy_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    country: Attribute.String & Attribute.Required;
    comments: Attribute.Text & Attribute.Required;
    video_url: Attribute.String;
  };
}

export interface VstudyTestimonial extends Schema.Component {
  collectionName: 'components_vstudy_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    testimonial_data: Attribute.Component<'vstudy.testimonial-item', true>;
  };
}

export interface VstudyTutionFeesAndScholarship extends Schema.Component {
  collectionName: 'components_vstudy_tution_fees_and_scholarships';
  info: {
    displayName: 'Tution Fees and Scholarship';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    domestic_tution: Attribute.String;
    domestic_other_expenses: Attribute.String;
    international_tution: Attribute.String;
    international_other_expenses: Attribute.String;
    scholarship: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface VstudyUniversityList extends Schema.Component {
  collectionName: 'components_vstudy_university_lists';
  info: {
    displayName: 'University List';
    description: '';
  };
  attributes: {
    universities: Attribute.Relation<
      'vstudy.university-list',
      'oneToMany',
      'api::university.university'
    >;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface VstudyUpcomingEvent extends Schema.Component {
  collectionName: 'components_vstudy_upcoming_events';
  info: {
    displayName: 'Upcoming Event';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    event_card: Attribute.Component<'vstudy.event-card', true>;
  };
}

export interface WorkBenefitsOfVisa extends Schema.Component {
  collectionName: 'components_work_benefits_of_visas';
  info: {
    displayName: 'Benefits of Visa';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    lists: Attribute.Component<'work.lists', true>;
  };
}

export interface WorkHero extends Schema.Component {
  collectionName: 'components_work_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    title_top_description: Attribute.String;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    hero_image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface WorkLists extends Schema.Component {
  collectionName: 'components_work_lists';
  info: {
    displayName: 'Lists';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface WorkPreferredNation extends Schema.Component {
  collectionName: 'components_work_preferred_nations';
  info: {
    displayName: 'Preferred Nation';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'event.event-gallery': EventEventGallery;
      'event.event-item': EventEventItem;
      'event.event-speaker': EventEventSpeaker;
      'event.hero-highlight': EventHeroHighlight;
      'event.hero': EventHero;
      'event.speaker-card': EventSpeakerCard;
      'event.upcoming-events': EventUpcomingEvents;
      'resource.counseling-form': ResourceCounselingForm;
      'resource.degree': ResourceDegree;
      'resource.files': ResourceFiles;
      'resource.hero': ResourceHero;
      'resource.resource-file': ResourceResourceFile;
      'scholarship.date-component': ScholarshipDateComponent;
      'scholarship.documents-card': ScholarshipDocumentsCard;
      'scholarship.hero': ScholarshipHero;
      'scholarship.key-date': ScholarshipKeyDate;
      'scholarship.overview': ScholarshipOverview;
      'scholarship.scholarship-type': ScholarshipScholarshipType;
      'scholarship.supporting-documents': ScholarshipSupportingDocuments;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'university.admission-requirements': UniversityAdmissionRequirements;
      'university.alumni-person': UniversityAlumniPerson;
      'university.alumni': UniversityAlumni;
      'university.demographics': UniversityDemographics;
      'university.gallery': UniversityGallery;
      'university.other-universities': UniversityOtherUniversities;
      'university.outcomes': UniversityOutcomes;
      'university.program-offered': UniversityProgramOffered;
      'university.requirement-item': UniversityRequirementItem;
      'university.student-statistic': UniversityStudentStatistic;
      'university.testimonial-data': UniversityTestimonialData;
      'university.testimonial': UniversityTestimonial;
      'vdesh.about-company': VdeshAboutCompany;
      'vdesh.button-group': VdeshButtonGroup;
      'vdesh.helpful-links': VdeshHelpfulLinks;
      'vdesh.how-vdesh-different': VdeshHowVdeshDifferent;
      'vdesh.lists': VdeshLists;
      'vdesh.news-and-reports': VdeshNewsAndReports;
      'vdesh.service-item': VdeshServiceItem;
      'vdesh.service-section': VdeshServiceSection;
      'vdesh.simplify-process-item': VdeshSimplifyProcessItem;
      'vdesh.simplify-process': VdeshSimplifyProcess;
      'vdesh.single-list': VdeshSingleList;
      'vdesh.success-stories': VdeshSuccessStories;
      'vdesh.testimonial-data': VdeshTestimonialData;
      'vdesh.testimonial': VdeshTestimonial;
      'vdesh.vdesh-hero': VdeshVdeshHero;
      'vdesh.why-choose': VdeshWhyChoose;
      'vstudy.about-country': VstudyAboutCountry;
      'vstudy.application-deadline-item': VstudyApplicationDeadlineItem;
      'vstudy.application-deadline': VstudyApplicationDeadline;
      'vstudy.bachelor-program': VstudyBachelorProgram;
      'vstudy.country-list': VstudyCountryList;
      'vstudy.country-scholarship': VstudyCountryScholarship;
      'vstudy.curriculum-item': VstudyCurriculumItem;
      'vstudy.curriculum': VstudyCurriculum;
      'vstudy.event-card': VstudyEventCard;
      'vstudy.faculty-members': VstudyFacultyMembers;
      'vstudy.faq-question-and-answer': VstudyFaqQuestionAndAnswer;
      'vstudy.faq': VstudyFaq;
      'vstudy.grow-skill-scholarship-components': VstudyGrowSkillScholarshipComponents;
      'vstudy.grow-skills': VstudyGrowSkills;
      'vstudy.hero': VstudyHero;
      'vstudy.masters-programs': VstudyMastersPrograms;
      'vstudy.members': VstudyMembers;
      'vstudy.multiple-section': VstudyMultipleSection;
      'vstudy.news-and-reports': VstudyNewsAndReports;
      'vstudy.price-card': VstudyPriceCard;
      'vstudy.price-plan': VstudyPricePlan;
      'vstudy.program-director-message': VstudyProgramDirectorMessage;
      'vstudy.study-levels': VstudyStudyLevels;
      'vstudy.subject-overview': VstudySubjectOverview;
      'vstudy.subject': VstudySubject;
      'vstudy.testimonial-item': VstudyTestimonialItem;
      'vstudy.testimonial': VstudyTestimonial;
      'vstudy.tution-fees-and-scholarship': VstudyTutionFeesAndScholarship;
      'vstudy.university-list': VstudyUniversityList;
      'vstudy.upcoming-event': VstudyUpcomingEvent;
      'work.benefits-of-visa': WorkBenefitsOfVisa;
      'work.hero': WorkHero;
      'work.lists': WorkLists;
      'work.preferred-nation': WorkPreferredNation;
    }
  }
}
