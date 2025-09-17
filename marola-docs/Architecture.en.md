# Architecture
Stack: FiveM/FXServer + txAdmin; vRPex (custom); MySQL/MariaDB; optional Redis; Prometheus/Grafana; Loki/Elastic; Nginx/WAF; CI (GitHub Actions).
Entities: vrp_users, vrp_characters, vrp_jobs, vrp_factions, vrp_vehicles, vrp_properties, vrp_inventories, vrp_items, vrp_transactions, vrp_fines, vrp_incidents, vrp_evidence, vrp_bans, vrp_appeals, vrp_logs.
Standards: Linters, client/server separation, event contracts, secrets in .env, semantic versioning.
