# cmms-demo-platform

Demo SaaS per gestione manutenzioni industriali

## Overview

# Product Requirements Document (PRD)

## Project Overview

The **cmms-demo-platform** is a SaaS application designed to simulate a Computerized Maintenance Management System (CMMS) for industrial maintenance and facility management. This platform aims to provide a realistic demonstration of enterprise-level software used by manufacturing companies, production facilities, and facility management firms to monitor machinery, schedule maintenance, and manage assets. The application will serve as a demo tool for commercial demonstrations, industry fairs, and corporate client presentations, showcasing complete workflows, realistic data, and advanced dashboards.

## Goals & Success Metrics

### Goals
- Develop a fully functional demo platform that mimics a real-world CMMS.
- Provide a user-friendly interface with comprehensive dashboards and analytics.
- Ensure the platform is suitable for demonstrations and presentations.

### Success Metrics
- **Usability**: User testing should show that 90% of users can navigate the platform and complete key tasks without assistance.
- **Performance**: The application should load within 3 seconds for 95% of users.
- **Engagement**: At least 80% of demo users should express interest in a full product after the demonstration.
- **Realism**: Feedback from industry experts should confirm that the platform convincingly simulates a real CMMS.

## Target Users

- **Maintenance Managers**: Need to track asset performance, schedule maintenance, and manage work orders.
- **Facility Managers**: Require insights into facility operations and maintenance costs.
- **Technicians**: Need to access work orders, update task status, and manage their schedules.
- **Sales and Marketing Teams**: Use the platform for demonstrations to potential clients.

## Core Features

### Dashboard Direzionale
- **General Status**: Overview of all assets and their operational status.
- **Scheduled and Completed Interventions**: Track maintenance tasks.
- **Open and Resolved Faults**: Monitor issues and resolutions.
- **KPI Tracking**: Efficiency and availability metrics for assets.
- **Monthly Maintenance Costs**: Financial overview of maintenance expenses.

### Gestione Asset
- **Asset Catalog**: Comprehensive list of machinery and equipment.
- **Detailed Technical Sheets**: Specifications and operational details.
- **Maintenance History**: Record of past maintenance activities.
- **Associated Documentation**: Access to manuals and technical documents.
- **Real-Time Operational Status**: Simulated live status updates.

### Ordini di Lavoro
- **Creation and Assignment**: Generate and allocate maintenance tasks.
- **Priority and Urgency Levels**: Categorize tasks by importance.
- **Progress Monitoring**: Track the status of ongoing work.
- **Operational Checklists**: Ensure all steps are completed.
- **Simulated Digital Signature**: Confirm task completion.

### Manutenzione Preventiva
- **Scheduled Maintenance Calendar**: Plan future maintenance activities.
- **Automatic Task Generation**: Create tasks based on schedules.
- **Expiry Alerts**: Notify users of upcoming deadlines.
- **Compliance Reports**: Document adherence to maintenance schedules.

### Tecnici e Squadre
- **Technical Personnel Management**: Organize and manage technician data.
- **Activity Calendar**: Schedule and track technician tasks.
- **Workload Management**: Balance tasks among operators.
- **Performance Metrics**: Analyze intervention times and efficiency.

### Magazzino Ricambi
- **Component Inventory**: Track parts and materials.
- **Spare Parts Availability**: Monitor stock levels.
- **Simulated Procurement Orders**: Manage supply chain activities.
- **Material Usage History**: Record of parts used in maintenance.

### Analytics
- **MTBF and MTTR**: Calculate and display key reliability metrics.
- **Fault Trends**: Analyze historical data for patterns.
- **Cost Analysis**: Breakdown of expenses by asset and department.
- **Advanced Graphical Dashboard**: Visualize data with charts and graphs.

## Technical Architecture

### Proposed Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Mock API with realistic data
- **Data Visualization**: Recharts or Chart.js

### Data Models
- **Assets**: Includes details like ID, type, status, and maintenance history.
- **Work Orders**: Contains information on tasks, priorities, and assigned technicians.
- **Technicians**: Profiles with skills, schedules, and performance data.
- **Inventory**: Tracks parts, quantities, and usage history.

### Key Components
- **Dashboard**: Centralized view of all metrics and statuses.
- **Asset Management Module**: For tracking and managing equipment.
- **Work Order Module**: For creating and managing maintenance tasks.
- **Inventory Management Module**: For managing spare parts and supplies.

## Non-Functional Requirements

- **Performance**: The application should handle up to 1,000 concurrent users.
- **Security**: Implement basic authentication and data protection measures.
- **Scalability**: Design architecture to support future expansion and additional features.
- **Responsiveness**: Ensure the application is usable on desktop, tablet, and mobile devices.

## Out of Scope

- **Integration with External Systems**: No real-time integration with third-party systems in v1.
- **Advanced User Management**: No role-based access control or multi-tenant support.
- **Real-Time Data Updates**: All data updates are simulated.

## Open Questions

- **User Feedback Mechanism**: How will user feedback be collected and analyzed?
- **Localization**: Will the platform support multiple languages in the future?
- **Data Export**: Should there be an option to export data for offline analysis?

This PRD outlines the essential components and requirements for the cmms-demo-platform, providing a comprehensive guide for development and ensuring alignment with business objectives.