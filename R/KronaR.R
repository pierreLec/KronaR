#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
KronaR <- function(data, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  dataString<-paste(apply(data,1,paste,collapse="\t"),collapse = "\n")
  #dataString<-data
  importT <-system.file("src/ImportText.pl", package = "Krona")
  #cmd<-paste("echo '",dataString,"'|",importT,sep=" ")

  cmd<-paste("echo '",dataString,"'| ",importT," 2>&1 ")
  dataxml <- system(cmd, intern = TRUE)

  x = list(
    
    data =dataxml
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'Krona',
    x,
    width = width,
    height = height,
    package = 'Krona',
    elementId = elementId
  )
}

#' Shiny bindings for KronaR
#'
#' Output and render functions for using KronaR within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a KronaR
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name KronaR-shiny
#'
#' @export
KronaROutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'KronaR', width, height, package = 'KronaR')
}

#' @rdname KronaR-shiny
#' @export
renderKronaR <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, KronaROutput, env, quoted = TRUE)
}
