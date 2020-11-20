let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../../assets/images', true, /\.svg$/))
} catch (error) {
}