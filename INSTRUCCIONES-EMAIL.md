# 📧 Instrucciones para enviar el email

## Vista previa del email

Abre el archivo `email-template.html` en tu navegador para ver cómo se ve el email.

## Cómo enviar el email

### Opción 1: Gmail (Recomendado)

1. **Abre el archivo HTML**:
   - Abre `email-template.html` en Google Chrome o tu navegador
   - Presiona `Cmd + A` (Mac) o `Ctrl + A` (Windows) para seleccionar todo
   - Presiona `Cmd + C` (Mac) o `Ctrl + C` (Windows) para copiar

2. **Pega en Gmail**:
   - Ve a Gmail y haz clic en "Redactar"
   - En el campo del mensaje, presiona `Cmd + V` (Mac) o `Ctrl + V` (Windows)
   - El diseño completo se pegará manteniendo el formato

3. **Añade el asunto**:
   - Asunto sugerido: "Algo especial te espera... ✨"

4. **¡Envía!**

### Opción 2: Cualquier cliente de email

1. Abre el archivo `email-template.html` en un editor de texto
2. Copia todo el código HTML
3. En tu cliente de email, busca la opción "HTML" o "Código fuente"
4. Pega el código HTML
5. Envía el email

## ⚠️ IMPORTANTE: Actualizar la URL

Antes de enviar el email, necesitas actualizar la URL del botón:

1. **Si tienes la web desplegada en internet** (Vercel, Netlify, etc.):
   - Abre `email-template.html` en un editor de texto
   - Busca la línea 122: `<a href="http://localhost:5173"`
   - Reemplaza `http://localhost:5173` con la URL real de tu web
   - Guarda el archivo

2. **Si solo quieres probar localmente**:
   - Deja la URL como está (`http://localhost:5173`)
   - Asegúrate de que el servidor esté corriendo cuando envíes el email
   - **Nota**: Esto solo funcionará si tu novia está en la misma red local

## Personalización opcional

Puedes personalizar estos elementos en el archivo HTML:

- **Línea 54**: El emoji decorativo superior (✨)
- **Línea 61**: El título principal
- **Línea 73**: El subtítulo
- **Línea 93**: El mensaje principal
- **Línea 123**: El texto del botón
- **Línea 140**: El mensaje de amor final

## Consejos para enviar

1. **Prueba primero**: Envíate el email a ti mismo para verificar que se vea bien
2. **Horario**: Envíalo en un momento especial o significativo
3. **Asunto misterioso**: Usa un asunto que genere curiosidad sin revelar mucho
4. **Seguimiento**: Estate atento para cuando ella lo abra y vea la sorpresa

## Desplegar la página web

Para que tu novia pueda acceder a la página desde cualquier lugar, necesitas desplegarla en internet. Opciones gratuitas:

### Vercel (Recomendado - Muy fácil):
```bash
# Instala Vercel CLI
npm install -g vercel

# En la carpeta del proyecto
cd regalo-navidad
npm run build

# Despliega
vercel
```

### Netlify:
1. Ve a https://netlify.com
2. Arrastra la carpeta `dist` (después de ejecutar `npm run build`)
3. Obtendrás una URL pública

Una vez desplegada, actualiza la URL en el email y ¡listo para enviar!
