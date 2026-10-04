# Northstar ITSM

A self-contained, ServiceNow-inspired IT service operations demo. The app is plain HTML, CSS, and JavaScript; it has no build step or package dependencies.

## Run it

Open `index.html` in a current desktop or mobile browser. If your browser restricts local file storage, serve this directory over HTTP instead, for example:

```powershell
python -m http.server 8000 --directory itsm
```

Then visit `http://localhost:8000`.

## Included workflows

- Service desk dashboard with workload, priority, SLA, and activity summaries
- Create and manage incidents, service requests, problems, changes, and configuration items
- Review and decide approvals; approving a linked request or change advances its workflow
- Search and browse a small self-service knowledge base
- Monitor incident response targets and inspect configurable automation flows
- Global record search, list filtering, CSV export, responsive navigation, and browser-local persistence

Records and workflow actions are stored in the current browser's local storage. The application is an interactive front-end demo, not a connected ITSM deployment: data is not shared between users or devices, and it does not integrate with identity providers, email, external CMDBs, or live SLA/automation services. Use **Clear site data** in the browser's storage settings to reset the workspace to its sample records.
