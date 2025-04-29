export interface TechnicalDetails {
  standards: string[];
  system_types?: string[];
  maintenance_schedule?: string | {
    weekly?: string;
    monthly?: string;
    quarterly?: string;
    annual?: string;
  };
  service_frequency?: string;
  compliance?: string;
  inspection_frequency?: string;
  testing_frequency?: string;
  duration?: string;
  certification?: string | {
    validity: string;
    type: string;
    assessment: string;
  };
  level?: string;
  assessment?: string;
  cpd_points?: string;
  response_times?: string | {
    alarm_activation: string;
    police_notification: string;
    keyholder_notification: string;
  };
  consulting_areas?: string | string[];
  max_participants?: string;
  follow_up?: string;
  assessment_areas?: string[];
  door_types?: string[];
  extinguisher_types?: string[];
  course_content?: string[];
  review_schedule?: {
    weekly?: string;
    monthly?: string;
    quarterly?: string;
    annual?: string;
  };
  coverage?: {
    districts: string[];
    response_times: {
      emergency: string;
      standard: string;
      planned: string;
    };
  };
  local_regulations?: string[];
  key_industries?: string[];
  assessor_qualifications?: string[];
  certifications?: string[];
  equipment: string[];
  prerequisites: string[];
  assessment_method: string;
  renewal_period: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  technical_details: TechnicalDetails;
  service_process: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface AreaContent {
  title: string;
  description: string;
  content: {
    intro: string;
    local_expertise: string;
    services_highlight: string;
    training_services: string;
    compliance: string;
    testimonials: Array<{
      quote: string;
      author: string;
    }>;
  };
}

export interface Area {
  id: string;
  name: string;
  description: string;
  postcode: string;
  coverage: {
    districts: string[];
    response_times: {
      emergency: string;
      standard: string;
      planned: string;
    };
  };
  key_industries: string[];
  local_regulations: string[];
  emergency_services: {
    fire_station_proximity: string;
    emergency_support: string;
    backup_services: string;
  };
}

export interface ServicesData {
  categories: Category[];
  area_content?: Record<string, {
    title: string;
    description: string;
    content: {
      intro: string;
      local_expertise: string;
      services_highlight: string;
      training_services: string;
      compliance: string;
      testimonials: Array<{
        quote: string;
        author: string;
      }>;
    };
  }>;
}

export interface LocationsData {
  areas: Area[];
}

export interface AreaContentData {
  areas: Record<string, AreaContent>;
} 