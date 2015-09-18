
module Jekyll
    class IconBlockTag < Liquid::Block

        def initialize(tag_name, icon_name, tokens)
            super
            @icon_name = icon_name.strip
        end

        def render(context)
            icon_text = super.to_s.strip
           "<div class=\"icon-block\">\n" +
               "<label class=\"icon #{@icon_name}\">#{icon_text}</label>\n" +
               "</div>"
        end
    end
end

Liquid::Template.register_tag('iconblock', Jekyll::IconBlockTag)
