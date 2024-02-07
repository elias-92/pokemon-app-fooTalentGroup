/**
 * Componente funcional que muestra un indicador de carga.
 * @returns {JSX.Element} El componente de indicador de carga.
 */
const Loading = () => {
  return (
    // Contenedor que centra el indicador de carga verticalmente y horizontalmente en la pantalla.
    <div className="flex items-center justify-center h-screen">
      {/* Indicador de carga animado */}
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  )
}

// Exporta el componente Loading para que pueda ser utilizado en otros componentes.
export default Loading
