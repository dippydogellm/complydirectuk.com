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

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  technical_details: {
    standards: string[];
    system_types?: string[];
    assessment_areas?: string[];
    door_types?: string[];
    extinguisher_types?: string[];
    course_content?: string[];
    maintenance_schedule?: {
      weekly?: string;
      monthly?: string;
      quarterly?: string;
      annual?: string;
      as_needed?: string;
    };
    review_schedule?: {
      weekly?: string;
      monthly?: string;
      quarterly?: string;
      annual?: string;
    };
    certification?: {
      validity: string;
      type: string;
      assessment: string;
    };
  };
  service_process: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface Testimonial {
  quote: string;
  author: string;
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
    testimonials: Testimonial[];
  };
}

export interface LocationsData {
  areas: Area[];
}

export interface ServicesData {
  categories: ServiceCategory[];
}

export interface AreaContentData {
  areas: {
    [key: string]: AreaContent;
  };
} 