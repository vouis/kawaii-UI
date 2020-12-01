let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../../assets/images', true, /\.svg$/))
} catch (error) {
}
// 全部引入，无法tree-shaking  dead code elimination
// tree-shaking import生效 commonJS require不生效