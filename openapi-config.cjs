const config = {
    schemaFile: 'http://localhost:3000/api-json',
    apiFile: './src/shared/api/baseApi.ts',
    apiImport: 'baseApi',
    outputFile: './src/shared/api/generatedApi.ts',
    exportName: 'generatedApi',
    hooks: true
}

module.exports = config;
