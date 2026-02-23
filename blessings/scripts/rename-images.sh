#!/bin/bash

# Script to rename images to SEO-friendly names
# Run this from the blessings directory: bash scripts/rename-images.sh

cd public/images

# Create backup directory
mkdir -p backup
cp *.jpeg backup/

# Rename images to SEO-friendly names
mv "WhatsApp Image 2026-02-21 at 13.25.34.jpeg" "exhauster-service-kisii-septic-tank.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.34 (1).jpeg" "exhauster-truck-nyamira-service.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.34 (2).jpeg" "transport-truck-blessing-movers.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.34 (3).jpeg" "exhauster-service-residential-area.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.35.jpeg" "exhauster-truck-migori-service.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.35 (1).jpeg" "exhauster-fleet-blessing-movers.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.35 (2).jpeg" "moving-services-homabay.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.35 (3).jpeg" "exhauster-service-action.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.36.jpeg" "transport-truck-warehouse.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.36 (1).jpeg" "exhauster-truck-professional-team.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.36 (2).jpeg" "exhauster-service-emergency.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.36 (3).jpeg" "grease-trap-cleaning-service.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.36 (4).jpeg" "pit-latrine-emptying-service.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.37.jpeg" "exhauster-truck-green-fleet.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.37 (1).jpeg" "exhauster-service-nyamira-town.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.37 (2).jpeg" "exhauster-truck-field-service.jpg" 2>/dev/null
mv "WhatsApp Image 2026-02-21 at 13.25.37 (3).jpeg" "commercial-transport-services.jpg" 2>/dev/null

echo "✅ Images renamed successfully!"
echo "📁 Original images backed up to public/images/backup/"
echo ""
echo "Next steps:"
echo "1. Optimize images with: npm run optimize-images (if you add this script)"
echo "2. Or use online tools like TinyPNG or ImageOptim"
echo "3. Update Hero section to use: exhauster-service-kisii-septic-tank.jpg"
