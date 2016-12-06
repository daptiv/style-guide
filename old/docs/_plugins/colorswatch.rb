
module Jekyll
    class ColorSwatchTag < Liquid::Tag

        def initialize(tag_name, swatch_color, tokens)
            super
            @swatch_color = swatch_color.strip
        end
        
        def render(context)

            "<div class=\"labeled-swatch-#{@swatch_color}\">\n" +
                "<div class=\"swatch\"></div>\n" +
                "<label>#{@swatch_color}</label>\n" +
                "</div>"
        end
    end
end

Liquid::Template.register_tag('colorswatch', Jekyll::ColorSwatchTag)


