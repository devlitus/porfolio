# Memoria de Ciberseguridad (Agente Cipher)

## Lecciones Aprendidas y Reglas Activas (DevSecOps)

> **Regla Base Permanente**: Ningún Agente (ni Cloe ni Leo) tiene permitido escribir variables de entorno sensibles (API Keys, JWT Secrets, DB Passwords) directamente en archivos `.astro`, `.ts`, o `.js`. Siempre deben requerir un archivo `.env` o el uso de `import.meta.env`.

*(Añadir aquí reglas sobre vulnerabilidades descubiertas en el proyecto, librerías baneadas por CVEs, o excepciones de falsos positivos en el escáner de secretos)*

> **🚀 Regla Aprendida (Dependencias / npm audit)**: Se han detectado de forma reiterada vulnerabilidades asociadas al empaquetado y árbol de `astro` (como `devalue` y `diff`) y dependencias cruzadas (ej. `dompurify`, `cross-spawn`). Como medida activa, el Agente Max o Félix deben ejecutar `pnpm update` de forma rutinaria y el Agente Cipher debe bloquear el paso a producción si la auditoría detecta fallos **Críticos**.

> **🚀 Regla Aprendida (Dompurify)**: Aunque usamos herramientas de mitigación en cliente, el paquete `dompurify` ha presentado CVEs de Mutation XSS. Se debe mantener este paquete actualizado o sustituirse por alternativas nativas si la estructura de Astro lo permite.
