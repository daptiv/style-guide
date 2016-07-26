
module Jekyll
    class FontBlockTag < Liquid::Tag

        def initialize(tag_name, font_style, tokens)
            super
            @font_style =  font_style.strip
        end

        def render(context)

            "<div class=\"font-block font-#{@font_style}\">\n" +
                "<label>#{@font_style}</label>\n" +
            "</div>"
        end
    end
end

Liquid::Template.register_tag('fontblock', Jekyll::FontBlockTag)
