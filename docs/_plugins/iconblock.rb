
module Jekyll
    class IconBlockTag < Liquid::Tag

        def initialize(tag_name, icon_name, tokens)
            super
            @icon_name = icon_name.strip
        end

        def render(context)
           "<div class=\"icon-block\">\n" +
               "<i class=\"icon #{@icon_name}\"></i> <label class=\"icon-name\">#{@icon_name}</label>\n" +
               "</div>"
        end
    end
end

Liquid::Template.register_tag('iconblock', Jekyll::IconBlockTag)
