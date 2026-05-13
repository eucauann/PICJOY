# Script de Deploy para GitHub e Vercel
# Execute: .\deploy.ps1

$repoPath = "c:\Users\cauan\Downloads\picjoy-landing-page"
$repoUrl = "https://github.com/eucauann/PICJOY.git"

Write-Host "🚀 Iniciando deploy do PICJOY..." -ForegroundColor Green

# Remover .git antigo se existir
if (Test-Path "$repoPath\.git") {
    Write-Host "🗑️  Removendo .git antigo..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "$repoPath\.git"
}

# Ir para pasta
cd $repoPath

# Configurar Git
Write-Host "⚙️  Configurando Git..." -ForegroundColor Cyan
git config --global user.name "eucauann"
git config --global user.email "seu.email@github.com"

# Inicializar
Write-Host "📦 Inicializando repositório..." -ForegroundColor Cyan
git init
git add .
git commit -m "Initial commit: PICJOY lead capture system"
git branch -M main

# Adicionar remote
Write-Host "🔗 Conectando ao GitHub..." -ForegroundColor Cyan
git remote add origin $repoUrl

# Push
Write-Host "⬆️  Enviando para GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "✅ Código no GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "Próximo passo:" -ForegroundColor Green
Write-Host "1. Acesse: https://vercel.com/dashboard" -ForegroundColor Cyan
Write-Host "2. Clique 'New Project'" -ForegroundColor Cyan
Write-Host "3. Importe: https://github.com/eucauann/PICJOY" -ForegroundColor Cyan
Write-Host "4. Configure variáveis de ambiente:" -ForegroundColor Cyan
Write-Host "   VITE_ORBITALFLOW_API_KEY=82551844369f4aa6ad912c5b684ba871" -ForegroundColor Cyan
Write-Host "5. Deploy!" -ForegroundColor Cyan
