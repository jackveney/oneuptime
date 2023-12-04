enum PageMap {
    INIT = 'INIT',
    INIT_PROJECT = 'INIT_PROJECT',

    // ONBOARDING
    WELCOME = 'WELCOME',

    //SSO
    PROJECT_SSO = 'PROJECT_SSO',

    // Telemetry
    TELEMETRY_ROOT = 'TELEMETRY_ROOT',
    TELEMETRY = 'TELEMETRY',
    TELEMETRY_SERVICES = 'TELEMETRY_SERVICES',
    TELEMETRY_SERVICES_VIEW = 'TELEMETRY_SERVICES_VIEW',
    TELEMETRY_SERVICES_VIEW_DELETE = 'TELEMETRY_SERVICES_VIEW_DELETE',

    // Telemetry - LOGS
    TELEMETRY_SERVICES_VIEW_LOGS = 'TELEMETRY_SERVICE_VIEW_LOGS',

    // Traces
    TELEMETRY_SERVICES_VIEW_TRACES = 'TELEMETRY_SERVICE_VIEW_TRACES',

    // Metrics
    TELEMETRY_SERVICES_VIEW_METRICS = 'TELEMETRY_SERVICE_VIEW_METRICS',

    // Dashboard
    TELEMETRY_SERVICES_VIEW_DASHBOARDS = 'TELEMETRY_SERVICES_VIEW_DASHBOARDS',

    HOME = 'HOME',
    HOME_NOT_OPERATIONAL_MONITORS = 'HOME_NOT_OPERATIONAL_MONITORS',
    HOME_ONGOING_SCHEDULED_MAINTENANCE_EVENTS = 'HOME_ONGOING_SCHEDULED_MAINTENANCE_EVENTS',

    INCIDENTS_ROOT = 'INCIDENTS_ROOT',
    INCIDENTS = 'INCIDENTS',
    UNRESOLVED_INCIDENTS = 'UNRESOLVED_INCIDENTS',
    INCIDENT_VIEW = 'INCIDENT_VIEW',
    INCIDENT_VIEW_DELETE = 'INCIDENT_VIEW_DELETE',
    INCIDENT_VIEW_STATE_TIMELINE = 'INCIDENT_VIEW_STATE_TIMELINE',
    INCIDENT_INTERNAL_NOTE = 'INCIDENT_INTERNAL_NOTE',
    INCIDENT_PUBLIC_NOTE = 'INCIDENT_PUBLIC_NOTE',
    INCIDENT_VIEW_CUSTOM_FIELDS = 'INCIDENT_VIEW_CUSTOM_FIELDS',
    INCIDENT_VIEW_OWNERS = 'INCIDENT_VIEW_OWNERS',

    SCHEDULED_MAINTENANCE_EVENTS_ROOT = 'SCHEDULED_MAINTENANCE_EVENTS_ROOT',
    SCHEDULED_MAINTENANCE_EVENTS = 'SCHEDULED_MAINTENANCE_EVENTS',
    ONGOING_SCHEDULED_MAINTENANCE_EVENTS = 'ONGOING_SCHEDULED_MAINTENANCE_EVENTS',
    SCHEDULED_MAINTENANCE_VIEW = 'SCHEDULED_MAINTENANCE_VIEW',
    SCHEDULED_MAINTENANCE_VIEW_DELETE = 'SCHEDULED_MAINTENANCE_VIEW_DELETE',
    SCHEDULED_MAINTENANCE_VIEW_STATE_TIMELINE = 'SCHEDULED_MAINTENANCE_VIEW_STATE_TIMELINE',
    SCHEDULED_MAINTENANCE_INTERNAL_NOTE = 'SCHEDULED_MAINTENANCE_INTERNAL_NOTE',
    SCHEDULED_MAINTENANCE_PUBLIC_NOTE = 'SCHEDULED_MAINTENANCE_PUBLIC_NOTE',
    SCHEDULED_MAINTENANCE_VIEW_CUSTOM_FIELDS = 'SCHEDULED_MAINTENANCE_VIEW_CUSTOM_FIELDS',
    SCHEDULED_MAINTENANCE_VIEW_OWNERS = 'SCHEDULED_MAINTENANCE_VIEW_OWNERS',

    MONITORS = 'MONITORS',
    MONITORS_ROOT = 'MONITORS_ROOT',
    MONITORS_INOPERATIONAL = 'MONITORS_INOPERATIONAL',
    MONITORS_DISABLED = 'MONITORS_DISABLED',
    MONITOR_VIEW = 'MONITOR_VIEW',
    MONITOR_VIEW_CRITERIA = 'MONITOR_VIEW_CRITERIA',
    MONITOR_VIEW_DELETE = 'MONITOR_VIEW_DELETE',
    MONITOR_VIEW_STATUS_TIMELINE = 'MONITOR_VIEW_STATUS_TIMELINE',
    MONITOR_VIEW_INCIDENTS = 'MONITOR_VIEW_INCIDENTS',
    MONITOR_VIEW_CUSTOM_FIELDS = 'MONITOR_VIEW_CUSTOM_FIELDS',
    MONITOR_VIEW_INTERVAL = 'MONITOR_VIEW_INTERVAL',
    MONITOR_VIEW_PROBES = 'MONITOR_VIEW_PROBES',
    MONITOR_VIEW_OWNERS = 'MONITOR_VIEW_OWNERS',
    MONITOR_VIEW_SETTINGS = 'MONITOR_VIEW_SETTINGS',

    MONITOR_GROUPS = 'MONITOR_GROUPS',
    MONITOR_GROUP_VIEW = 'MONITOR_GROUP_VIEW',
    MONITOR_GROUP_VIEW_DELETE = 'MONITOR_GROUP_VIEW_DELETE',
    MONITOR_GROUP_VIEW_MONITORS = 'MONITOR_GROUP_VIEW_MONITORS',
    MONITOR_GROUP_VIEW_OWNERS = 'MONITOR_GROUP_VIEW_OWNERS',
    MONITOR_GROUP_VIEW_INCIDENTS = 'MONITOR_GROUP_VIEW_INCIDENTS',

    STATUS_PAGES_ROOT = 'STATUS_PAGES_ROOT',
    STATUS_PAGES = 'STATUS_PAGES',
    STATUS_PAGE_VIEW = 'STATUS_PAGE_VIEW',
    STATUS_PAGE_VIEW_BRANDING = 'STATUS_PAGE_VIEW_BRADNING',
    STATUS_PAGE_VIEW_HEADER_STYLE = 'STATUS_PAGE_VIEW_HEADER_STYLE',
    STATUS_PAGE_VIEW_FOOTER_STYLE = 'STATUS_PAGE_VIEW_FOOTER_STYLE',
    STATUS_PAGE_VIEW_NAVBAR_STYLE = 'STATUS_PAGE_VIEW_NAVBAR_STYLE',
    STATUS_PAGE_VIEW_DELETE = 'STATUS_PAGE_VIEW_DELETE',
    STATUS_PAGE_VIEW_DOMAINS = 'STATUS_PAGE_VIEW_DOMAINS',
    STATUS_PAGE_VIEW_EMBEDDED = 'STATUS_PAGE_VIEW_EMBEDDED',
    STATUS_PAGE_VIEW_ANNOUNCEMENTS = 'STATUS_PAGE_VIEW_ANNOUNCEMENTS',
    STATUS_PAGE_VIEW_EMAIL_SUBSCRIBERS = 'STATUS_PAGE_VIEW_EMAIL_SUBSCRIBERS',
    STATUS_PAGE_VIEW_SMS_SUBSCRIBERS = 'STATUS_PAGE_VIEW_SMS_SUBSCRIBERS',
    STATUS_PAGE_VIEW_WEBHOOK_SUBSCRIBERS = 'STATUS_PAGE_VIEW_WEBHOOK_SUBSCRIBERS',
    STATUS_PAGE_VIEW_RESOURCES = 'STATUS_PAGE_VIEW_RESOURCES',
    STATUS_PAGE_VIEW_ADVANCED_OPTIONS = 'STATUS_PAGE_VIEW_ADVANCED_OPTIONS',
    STATUS_PAGE_VIEW_AUTHENTICATION_SETTINGS = 'STATUS_PAGE_VIEW_AUTHENTICATION_SETTINGS',
    STATUS_PAGE_VIEW_CUSTOM_HTML_CSS = 'STATUS_PAGE_VIEW_CUSTOM_HTML_CSS',
    STATUS_PAGE_VIEW_GROUPS = 'STATUS_PAGE_VIEW_GROUPS',
    STATUS_PAGE_VIEW_SUBSCRIBER_SETTINGS = 'STATUS_PAGE_VIEW_SUBSCRIBER_SETTINGS',
    STATUS_PAGE_VIEW_PRIVATE_USERS = 'STATUS_PAGE_VIEW_PRIVATE_USERS',
    STATUS_PAGE_VIEW_CUSTOM_FIELDS = 'STATUS_PAGE_VIEW_CUSTOM_FIELDS',
    STATUS_PAGE_VIEW_SSO = 'STATUS_PAGE_VIEW_SSO',
    STATUS_PAGE_VIEW_CUSTOM_SMTP = 'STATUS_PAGE_VIEW_CUSTOM_SMTP',
    STATUS_PAGE_VIEW_OWNERS = 'STATUS_PAGE_VIEW_OWNERS',
    STATUS_PAGE_VIEW_SETTINGS = 'STATUS_PAGE_VIEW_SETTINGS',

    LOGS = 'LOGS',

    ON_CALL_DUTY = 'ON_CALL_DUTY',
    ON_CALL_DUTY_POLICIES = 'ON_CALL_DUTY_POLICIES',
    ON_CALL_DUTY_EXECUTION_LOGS = 'ON_CALL_DUTY_EXECUTION_LOGS',
    ON_CALL_DUTY_EXECUTION_LOGS_TIMELINE = 'ON_CALL_DUTY_EXECUTION_LOGS_TIMELINE',
    ON_CALL_DUTY_POLICY_VIEW = 'ON_CALL_DUTY_POLICY_VIEW',
    ON_CALL_DUTY_POLICY_VIEW_CUSTOM_FIELDS = 'ON_CALL_DUTY_POLICY_VIEW_CUSTOM_FIELDS',
    ON_CALL_DUTY_POLICY_VIEW_DELETE = 'ON_CALL_DUTY_POLICY_VIEW_DELETE',
    ON_CALL_DUTY_POLICY_VIEW_EXECUTION_LOGS = 'ON_CALL_DUTY_POLICY_VIEW_EXECUTION_LOGS',
    ON_CALL_DUTY_POLICY_VIEW_ESCALATION = 'ON_CALL_DUTY_POLICY_VIEW_ESCALATION',
    ON_CALL_DUTY_POLICY_VIEW_EXECUTION_LOG_VIEW = 'ON_CALL_DUTY_POLICY_VIEW_EXECUTION_LOG_VIEW',

    ON_CALL_DUTY_SCHEDULES = 'ON_CALL_DUTY_SCHEDULES',
    ON_CALL_DUTY_SCHEDULE_VIEW = 'ON_CALL_DUTY_SCHEDULE_VIEW',
    ON_CALL_DUTY_SCHEDULE_VIEW_DELETE = 'ON_CALL_DUTY_SCHEDULE_VIEW_DELETE',
    ON_CALL_DUTY_SCHEDULE_VIEW_LAYERS = 'ON_CALL_DUTY_SCHEDULE_VIEW_LAYERS',

    AUTOMATION_SCRIPTS = 'AUTOMATION_SCRIPTS',
    REPORTS = 'REPORTS',
    ERROR_TRACKER = 'ERROR_TRACKER',

    // User Settings.
    USER_SETTINGS = 'USER_SETTINGS',
    USER_SETTINGS_NOTIFICATION_METHODS = 'USER_SETTINGS_NOTIFICATION_METHODS',
    USER_SETTINGS_ON_CALL_RULES = 'USER_SETTINGS_ON_CALL_RULES',
    USER_SETTINGS_ON_CALL_LOGS = 'USER_SETTINGS_ON_CALL_LOGS',
    USER_SETTINGS_ON_CALL_LOGS_TIMELINE = 'USER_SETTINGS_ON_CALL_LOGS_TIMELINE',
    USER_SETTINGS_NOTIFICATION_SETTINGS = 'USER_SETTINGS_NOTIFICATION_SETTINGS',

    // Settings Routes
    SETTINGS = 'SETTINGS',
    SETTINGS_DANGERZONE = 'SETTINGS_DANGERZONE',

    // API Keys.
    SETTINGS_APIKEYS = 'SETTINGS_APIKEYS',
    SETTINGS_APIKEY_VIEW = 'SETTINGS_APIKEY_VIEW',
    SETTINGS_CUSTOM_SMTP = 'SETTINGS_CUSTOM_SMTP',

    // Team
    SETTINGS_TEAMS = 'SETTINGS_TEAMS',
    SETTINGS_TEAM_VIEW = 'SETTINGS_TEAM_VIEW',

    // Resource settings.
    SETTINGS_INCIDENTS_STATE = 'SETTINGS_INCIDENTS_STATE',
    SETTINGS_INCIDENTS_SEVERITY = 'SETTINGS_INCIDENTS_SEVERITY',
    SETTINGS_INCIDENT_CUSTOM_FIELDS = 'SETTINGS_INCIDENT_CUSTOM_FIELDS',

    // Status Page
    SETTINGS_STATUS_PAGE_CUSTOM_FIELDS = 'SETTINGS_STATUS_PAGE_CUSTOM_FIELDS',

    // monitors
    SETTINGS_MONITORS_STATUS = 'SETTINGS_MONITORS_STATUS',
    SETTINGS_MONITOR_CUSTOM_FIELDS = 'SETTINGS_MONITOR_CUSTOM_FIELDS',

    // incident templates
    SETTINGS_INCIDENT_TEMPLATES = 'SETTINGS_INCIDENT_TEMPLATES',
    SETTINGS_INCIDENT_TEMPLATES_VIEW = 'SETTINGS_INCIDENT_TEMPLATES_VIEW',

    // incident note templates
    SETTINGS_INCIDENT_NOTE_TEMPLATES = 'SETTINGS_INCIDENT_NOTE_TEMPLATES',
    SETTINGS_INCIDENT_NOTE_TEMPLATES_VIEW = 'SETTINGS_INCIDENT_NOTE_TEMPLATES_VIEW',

    // incident note templates
    SETTINGS_SCHEDULED_MAINTENANCE_NOTE_TEMPLATES = 'SETTINGS_SCHEDULED_MAINTENANCE_NOTE_TEMPLATES',
    SETTINGS_SCHEDULED_MAINTENANCE_NOTE_TEMPLATES_VIEW = 'SETTINGS_SCHEDULED_MAINTENANCE_NOTE_TEMPLATES_VIEW',

    // on-call duty
    SETTINGS_ON_CALL_DUTY_POLICY_CUSTOM_FIELDS = 'SETTINGS_ON_CALL_DUTY_POLICY_CUSTOM_FIELDS',

    // Scheduled Events
    SETTINGS_SCHEDULED_MAINTENANCE_STATE = 'SETTINGS_SCHEDULED_MAINTENANCE_STATE',
    SETTINGS_SCHEDULED_MAINTENANCE_CUSTOM_FIELDS = 'SETTINGS_SCHEDULED_MAINTENANCE_CUSTOM_FIELDS',

    // Labels.
    SETTINGS_LABELS = 'SETTINGS_LABELS',

    // Probes.
    SETTINGS_PROBES = 'SETTINGS_PROBES',

    // SSO.
    SETTINGS_SSO = 'SETTINGS_SSO',

    // Domains

    SETTINGS_DOMAINS = 'SETTINGS_DOMAINS',

    // BILLING

    SETTINGS_BILLING = 'SETTINGS_BILLING',
    SETTINGS_BILLING_INVOICES = 'SETTINGS_BILLING_INVOICES',

    // Featur Flags
    SETTINGS_FEATURE_FLAGS = 'SETTINGS_FEATURE_FLAGS',

    // Misc
    LOGOUT = 'LOGOUT',
    USER_PROFILE_OVERVIEW = 'USER_PROFILE_OVERVIEW',
    USER_PROFILE_PASSWORD = 'USER_PROFILE_PASSWORD',
    USER_PROFILE_PICTURE = 'USER_PROFILE_PICTURE',
    ACTIVE_INCIDENTS = 'ACTIVE_INCIDENTS',
    PROJECT_INVITATIONS = 'PROJECT_INVITATIONS',

    // WORKFLOW
    WORKFLOWS_ROOT = 'WORKFLOWS_ROOT',
    WORKFLOWS = 'WORKFLOWS',
    WORKFLOWS_LOGS = 'WORKFLOWS_LOGS',
    WORKFLOWS_VARIABLES = 'WORKFLOWS_VARIABLES',
    WORKFLOW_VIEW = 'WORKFLOW_VIEW',
    WORKFLOW_DELETE = 'WORKFLOW_DELETE',
    WORKFLOW_BUILDER = 'WORKFLOW_BUILDER',
    WORKFLOW_LOGS = 'WORKFLOW_LOGS',
    WORKFLOW_VARIABLES = 'WORKFLOW_VARIABLES',
    WORKFLOW_VIEW_SETTINGS = 'WORKFLOW_VIEW_SETTINGS',

    // SMS and Call
    SETTINGS_CALL_SMS = 'SETTINGS_CALL_SMS',
    SETTINGS_SMS_LOGS = 'SETTINGS_SMS_LOGS',
    SETTINGS_EMAIL_LOGS = 'SETTINGS_EMAIL_LOGS',
    SETTINGS_CALL_LOGS = 'SETTINGS_CALL_LOGS',
}

export default PageMap;
