# Arquitetura
Stack: FiveM/FXServer + txAdmin; vRPex (custom); MySQL/MariaDB; Redis opcional; Prometheus/Grafana; Loki/Elastic; Nginx/WAF; CI (GitHub Actions).
Entidades: vrp_users, vrp_characters, vrp_jobs, vrp_factions, vrp_vehicles, vrp_properties, vrp_inventories, vrp_items, vrp_transactions, vrp_fines, vrp_incidents, vrp_evidence, vrp_bans, vrp_appeals, vrp_logs.
Padrões: Linters, separação client/server, contratos de eventos, secrets em .env, versionamento semântico.
