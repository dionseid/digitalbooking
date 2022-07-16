# requisitos

## generales:

- Registrar un dominio y tener disponible su DNS para pasar como variable
- Crear un par de llaves SSH, guardar la privada, y pasar como variable la pública

## Antes de crear backend:

# billing

- Tabla de DynamoDB para state lock de Terraform tiene billing_mode = "PAY_PER_REQUEST"

# funcionalidad suspendida

- Delivery de ELB logs hacia CloudWatch: requiere pago
